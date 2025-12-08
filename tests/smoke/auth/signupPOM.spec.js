import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import MainPage from "../../../src/pages_objects/main/MainPage";

test.describe.only("Signup test POM", () => {
  test("Signup with valid credentials (POM)", async ({ page }) => {
    const main = new MainPage(page);
    await main.navigate();
    await main.openSignupPopup();

    const popup = main.registrationPopup;
    const password = `Qwerty${faker.number.int({ min: 100, max: 999 })}`;
    const userData = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: password,
      repeatPassword: password,
    };

    await popup.register(userData);

    await expect(popup.root).toBeHidden();
    await expect(
      page.getByText("My profile"),
      "User should be logged in"
    ).toBeVisible();
  });
});
