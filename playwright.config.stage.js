// @ts-check
import { defineConfig, devices } from "@playwright/test";
import config from "./config/config.js";

//launch new config npx playwright test -c playwright.config.stage.js
export default defineConfig({
  // testDir: './tests',
  testMatch: /\/tests\/.*\.spec\.js/,
  globalSetup: "./globalSetup",
  globalTeardown: "./globalTeardown",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: config.baseURLStage,
    httpCredentials: config.httpCredentials,
    trace: "on-first-retry",
    headless: true,
  },
  projects: [
    {
      name: "setup",
      testMatch: /\/tests\/setup\/.*\.setup\.js/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "smoke",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
        trace: "on",
        screenshots: {
          fullPage: true,
          mode: "on",
        },
      },
    },
  ],
});
