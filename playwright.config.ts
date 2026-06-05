import { defineConfig, devices } from "@playwright/test";

/**
 * Cross-browser E2E config for the MeinBit landing site.
 *
 * Builds the site and serves the production bundle with `vite preview`, then
 * runs the suite across the three main engines (Chromium → Chrome/Edge,
 * Firefox → Gecko, WebKit → Safari) on desktop, plus mobile Chrome and
 * mobile Safari viewports to verify responsive rendering.
 */

const PORT = 4317;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // One retry locally too: browser E2E has inherent timing flake (animations,
  // third-party network) that a single retry absorbs without masking real bugs.
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    { name: "chromium",      use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",       use: { ...devices["Desktop Firefox"] } },
    { name: "webkit",        use: { ...devices["Desktop Safari"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 7"] } },
    { name: "mobile-safari", use: { ...devices["iPhone 14"] } },
  ],

  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT} --strictPort`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
