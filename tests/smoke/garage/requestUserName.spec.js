import { adminFixture as test } from "../../../src/customFixtures/adminFixture.js";
import { expect } from "@playwright/test";

test.describe("Intercept user profile name", () => {
  test("mock user name and check on profile page", async ({ page }) => {
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

    await page.route("**/users/profile", async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(mockedUserName),
      });
    });
    await page.goto("/panel/garage");

    const profileLink = page.locator('a.btn:has-text("Profile")');

    await profileLink.waitFor({ state: "visible", timeout: 10000 });

    await profileLink.click();

    const nameLocator = page.locator(".profile_name");
    await expect(nameLocator).toBeVisible({ timeout: 10000 });
    await expect(nameLocator).toHaveText("ronnie dog");

    await page.pause();
  });
});
