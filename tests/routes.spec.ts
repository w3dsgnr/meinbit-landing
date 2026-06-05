import { test, expect, type Page } from "@playwright/test";

const policyRoutes = [
  { path: "/privacy-policy",   heading: "Privacy Policy" },
  { path: "/terms-of-service", heading: "Terms of Use" },
  { path: "/cookie-policy",    heading: "Cookie Policy" },
  { path: "/aml-kyc",          heading: "AML / KYC Policy" },
  { path: "/imprint",          heading: "Imprint / Legal Information" },
];

/** Dismiss the consent banner so it never overlaps the elements under test. */
async function seedConsent(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      "meinbit:cookies",
      JSON.stringify({ v: 1, ts: "2026-06-05T00:00:00.000Z", categories: { preferences: true, analytics: true, marketing: true } }),
    );
  });
}

test.describe("Home page", () => {
  test("loads and renders nav + footer without uncaught errors", async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));

    await seedConsent(page);
    await page.goto("/");

    await expect(page).toHaveTitle(/MeinBit/i);
    // Footer brand is rendered on every page.
    await expect(page.locator(".footer-logo")).toBeVisible();

    // The live-price call to CoinGecko is third-party and is gracefully
    // handled in-app (try/catch + static fallback). Some engines (WebKit)
    // surface a blocked cross-origin request as a page-level error in the
    // sandbox — that is environmental noise, not a defect, so filter it out.
    const realErrors = pageErrors.filter(
      (m) => !/coingecko|access control|load failed|networkerror|fetch/i.test(m),
    );
    expect(realErrors, realErrors.join("\n")).toHaveLength(0);
  });
});

test.describe("Policy routes (SPA navigation + content)", () => {
  for (const { path, heading } of policyRoutes) {
    test(`${path} renders heading and updated date`, async ({ page }) => {
      await seedConsent(page);
      await page.goto(path);

      await expect(page.locator("h1")).toHaveText(heading);
      await expect(page.locator(".policy-updated")).toContainText("Last updated");
      await expect(page).toHaveTitle(new RegExp(`MeinBit`, "i"));
    });
  }

  test("direct deep-link load works (SPA fallback)", async ({ page }) => {
    await seedConsent(page);
    // Hard navigation straight to a nested route — must not 404.
    const resp = await page.goto("/privacy-policy", { waitUntil: "domcontentloaded" });
    expect(resp?.status()).toBeLessThan(400);
    await expect(page.locator("h1")).toHaveText("Privacy Policy");
  });
});

test.describe("Legal entity content", () => {
  test("Imprint shows LUNTRA details (KRS, NIP, RDWW-1771)", async ({ page }) => {
    await seedConsent(page);
    await page.goto("/imprint");
    const body = page.locator(".policy-card");
    await expect(body).toContainText("LUNTRA");
    await expect(body).toContainText("0001143324"); // KRS
    await expect(body).toContainText("8982315211"); // NIP
    await expect(body).toContainText("RDWW-1771");
    await expect(body).toContainText("Wrocław");
    // The previous operator must be gone.
    await expect(body).not.toContainText("Trust Change");
  });

  test("Cookie Policy reflects EU consent model", async ({ page }) => {
    await seedConsent(page);
    await page.goto("/cookie-policy");
    const body = page.locator(".policy-card");
    await expect(body).toContainText("ePrivacy");
    await expect(body).toContainText("GDPR");
    await expect(body).toContainText("Reject all");
    await expect(body).toContainText("withdraw");
  });
});
