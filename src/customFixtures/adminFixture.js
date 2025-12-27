import { baseCustomFixture as base } from "./baseCustomFixture.js";
import GaragePage from "../pages_objects/garage/GaragePage.js";

export const adminFixture = base.extend({
  page: async ({ browser }, use) => {
    // создаём контекст с storageState
    const context = await browser.newContext({
      storageState: "state/adminStorageState.json",
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  garagePage: async ({ page }, use) => {
    await page.goto("https://qauto.forstudy.space/panel/garage");

    const profileLink = page.locator('a.btn:has-text("Profile")');
    await profileLink.waitFor({ state: "visible", timeout: 20000 });

    const garagePage = new GaragePage(page);
    await use(garagePage);
  },
});
