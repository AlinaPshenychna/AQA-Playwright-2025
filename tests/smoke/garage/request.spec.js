import { guestTest } from "../../../src/customFixtures/guestFixture.js";
import { expect } from "@playwright/test"; 

guestTest.describe.only("Intercept user profile name", () => {
  guestTest("mock user name", async ({ garagePage, page }) => {
    const mockedUserName = {
      status: "ok",
      data: [
        {
          userId: 316917,
          photoFilename: "default-user.png",
          name: "ronnie",
          lastName: "dog",
        },
      ],
    };
       await page.goto("**/panel/profile");
          await page.goto("/panel/profile");
    await guestTest.step("Create a new user name", async () => {
      await page.route("**/panel/garage", async (route) => {
        await route.fulfill({
          status: 200,
          body: JSON.stringify(mockedUserName),
        });
      });
      await page.goto("/panel/profile");

      await page.goto("**/users/profile");
      const nameLocator = page.locator(".profile_name");
      await expect(nameLocator).toBeVisible();
      await page.pause();
    });
  });
});
