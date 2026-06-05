import { test, expect, type Page } from "@playwright/test";

const KEY = "meinbit:cookies";

function readStored(page: Page) {
  return page.evaluate((k) => {
    const raw = localStorage.getItem(k);
    return raw ? JSON.parse(raw) : null;
  }, KEY);
}

test.describe("Cookie consent (CMP)", () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test("banner appears on first visit with Reject/Accept equally available", async ({ page }) => {
    await page.goto("/");
    const banner = page.getByRole("dialog");
    await expect(banner).toBeVisible();
    await expect(banner.getByRole("button", { name: "Reject all" })).toBeVisible();
    await expect(banner.getByRole("button", { name: "Accept all" })).toBeVisible();
    await expect(banner.getByRole("button", { name: "Customize" })).toBeVisible();
  });

  test("Accept all stores all categories = true", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();

    const stored = await readStored(page);
    expect(stored.v).toBe(1);
    expect(stored.categories).toEqual({ preferences: true, analytics: true, marketing: true });
    expect(typeof stored.ts).toBe("string");
  });

  test("Reject all stores all categories = false", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();

    const stored = await readStored(page);
    expect(stored.categories).toEqual({ preferences: false, analytics: false, marketing: false });
  });

  test("Customize → granular choice persists (analytics only)", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Customize" }).click();

    // Strictly necessary is forced on and disabled.
    const necessary = page.locator(".cookie-cat--locked .cookie-switch");
    await expect(necessary).toBeChecked();
    await expect(necessary).toBeDisabled();

    // Enable analytics only, then save.
    await page.getByText("Analytics", { exact: true }).click();
    await page.getByRole("button", { name: "Save preferences" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();

    const stored = await readStored(page);
    expect(stored.categories).toEqual({ preferences: false, analytics: true, marketing: false });
  });

  test("choice persists across reloads (banner stays dismissed)", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Accept all" }).click();
    // domcontentloaded, not load: WebKit keeps the third-party price request
    // pending in the sandbox, which would stall a wait for the load event.
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("footer 'Cookie settings' reopens the banner in settings mode", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();

    const settingsBtn = page.getByRole("button", { name: "Cookie settings" });
    await settingsBtn.scrollIntoViewIfNeeded();
    await expect(settingsBtn).toBeVisible();
    await settingsBtn.click();
    const banner = page.getByRole("dialog");
    await expect(banner).toBeVisible();
    // Settings mode shows the category switches immediately.
    await expect(banner.locator(".cookie-cat")).toHaveCount(4);
  });
});
