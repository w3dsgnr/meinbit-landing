import { test, expect, type Page } from "@playwright/test";

async function seedConsent(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      "meinbit:cookies",
      JSON.stringify({ v: 1, ts: "2026-06-05T00:00:00.000Z", categories: { preferences: true, analytics: true, marketing: true } }),
    );
  });
}

const pages = [
  { name: "home",    path: "/" },
  { name: "privacy", path: "/privacy-policy" },
  { name: "cookie",  path: "/cookie-policy" },
  { name: "imprint", path: "/imprint" },
];

test.describe("Rendering / layout", () => {
  for (const p of pages) {
    test(`${p.name}: no horizontal overflow + screenshot`, async ({ page }, testInfo) => {
      await seedConsent(page);
      await page.goto(p.path, { waitUntil: "networkidle" }).catch(() => page.goto(p.path));
      await page.waitForLoadState("domcontentloaded");

      // The page must not scroll sideways on any viewport.
      const overflow = await page.evaluate(() => {
        const el = document.documentElement;
        return el.scrollWidth - el.clientWidth;
      });
      expect(overflow, `horizontal overflow of ${overflow}px on ${p.name}`).toBeLessThanOrEqual(2);

      // Scroll through the whole page so IntersectionObserver scroll-reveal
      // sections fire, then return to top — otherwise a full-page screenshot
      // captures still-hidden sections as blank.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 250));
      });

      // Visual artifact for manual rendering review, per browser project.
      await page.screenshot({
        path: testInfo.outputPath(`${p.name}-${testInfo.project.name}.png`),
        fullPage: true,
      });
    });
  }
});
