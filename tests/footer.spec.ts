import { test, expect, type Page } from "@playwright/test";

async function seedConsent(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      "meinbit:cookies",
      JSON.stringify({ v: 1, ts: "2026-06-05T00:00:00.000Z", categories: { preferences: true, analytics: true, marketing: true } }),
    );
  });
}

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await seedConsent(page);
    await page.goto("/");
  });

  test("shows LUNTRA copyright and legal disclaimer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer.locator(".footer-copyright")).toContainText("© LUNTRA Sp. z o.o. 2026");

    const legal = footer.locator(".footer-legal");
    await expect(legal).toContainText("meinbit.io platform is operated by LUNTRA");
    await expect(legal).toContainText("KRS No. 0001143324");
    await expect(legal).toContainText("RDWW-1771");
    await expect(legal).toContainText("Virtual currencies are not legal tender");
  });

  test("horizontal divider is present before the legal block", async ({ page }) => {
    await expect(page.locator("footer .footer-divider")).toBeVisible();
  });

  test("legal links navigate to policy pages", async ({ page }) => {
    await page.locator('footer a[href="/privacy-policy"]').click();
    await expect(page.locator("h1")).toHaveText("Privacy Policy");
  });
});
