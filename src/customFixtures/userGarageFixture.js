import { test as base, expect } from "@playwright/test";
import GaragePage from "../pages_objects/garage/GaragePage.js";

export const test = base.extend({
  userGaragePage: async ({ page }, use) => {
    const garagePage = new GaragePage(page);
    await garagePage.navigate();
    await use(garagePage);
  },
});

export { expect };
