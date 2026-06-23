import { test, expect, type Page } from "@playwright/test";

/*
  Verification harness for the Payroll scroll-animated section (not a CI gate —
  produces screenshots under verify/ for manual review of the storyboard).
  Drives the pinned GSAP timeline directly through the exposed
  window.__payrollSeek(progress) helper and captures each beat.
*/

// Deterministic, instant scroll that centres the phone in the viewport
// (scrollIntoView rides scroll-behavior:smooth, which is unreliable in tests).
async function centerPhone(page: Page) {
  await page.evaluate(async () => {
    await (document as unknown as { fonts: { ready: Promise<unknown> } }).fonts.ready;
    const phone = document.querySelector(".pr-phone") as HTMLElement | null;
    if (!phone) return;
    const r = phone.getBoundingClientRect();
    window.scrollTo({ top: r.top + window.scrollY - (window.innerHeight - r.height) / 2, behavior: "auto" });
  });
}

async function seedConsent(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      "meinbit:cookies",
      JSON.stringify({
        v: 1,
        ts: "2026-06-05T00:00:00.000Z",
        categories: { preferences: true, analytics: true, marketing: true },
      }),
    );
  });
}

test.describe("Payroll — animated (no-preference)", () => {
  test.use({ reducedMotion: "no-preference" });

  test("desktop beats 0 / 0.33 / 0.66 / 1", async ({ page, viewport }, testInfo) => {
    test.skip((viewport?.width ?? 0) < 768, "desktop branch only");
    await seedConsent(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => typeof (window as unknown as { __payrollSeek?: unknown }).__payrollSeek === "function", null, {
      timeout: 20_000,
    });
    // Wait for Nunito to load + the fonts.ready ScrollTrigger.refresh() to
    // settle, so start/end are final before we seek (otherwise p=0 is stale).
    await page.evaluate(() => (document as unknown as { fonts: { ready: Promise<unknown> } }).fonts.ready);
    await page.waitForTimeout(500);

    for (const p of [0, 0.33, 0.66, 1]) {
      await page.evaluate((pp) => (window as unknown as { __payrollSeek: (n: number) => void }).__payrollSeek(pp), p);
      await page.waitForTimeout(1400); // let the scrub (0.8s) ease to target
      await page.screenshot({ path: `verify/${testInfo.project.name}-p${p}.png` });
    }
  });

  test("mobile reveal", async ({ page, viewport }, testInfo) => {
    test.skip((viewport?.width ?? 9999) >= 768, "mobile branch only");
    await seedConsent(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await centerPhone(page);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `verify/${testInfo.project.name}.png` });
  });
});

test.describe("Payroll — reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("composed final state", async ({ page, viewport }, testInfo) => {
    test.skip((viewport?.width ?? 0) < 768, "desktop branch only");
    await page.emulateMedia({ reducedMotion: "reduce" }); // test.use didn't apply reliably
    await seedConsent(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await centerPhone(page);
    await page.waitForTimeout(600);

    const dbg = await page.evaluate(() => ({
      reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
      noPref: matchMedia("(prefers-reduced-motion: no-preference)").matches,
      seekDefined: typeof (window as unknown as { __payrollSeek?: unknown }).__payrollSeek === "function",
      counter: document.querySelector(".pr-row-hero .pr-row-amount")?.textContent,
    }));
    await page.screenshot({ path: `verify/reduced-${testInfo.project.name}.png` });
    // Under reduced motion the desktop (animated) branch must NOT run, so the
    // seek helper it installs must be absent and the total must be final.
    expect(dbg.seekDefined, `reduced diagnostics: ${JSON.stringify(dbg)}`).toBe(false);
  });
});
