import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("successful registration", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("check registration button", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const signupLastName = modal.locator("#signupLastName");
    const signupEmail = modal.locator("#signupEmail");
    const signupPassword = modal.locator("#signupPassword");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const registerBtn = modal.locator(".btn-primary", { hasText: "Register" });

    await signupName.focus();
    await signupName.fill(faker.person.firstName());
    await signupLastName.focus();
    await signupLastName.fill(faker.person.lastName());
    await signupEmail.focus();
    await signupEmail.fill(
      `aqa-jhon${faker.number.int({ min: 10, max: 99 })}@test.qa`
    );
    await signupPassword.focus();
    await signupPassword.fill("12345678aA");
    await signupRepeatPassword.focus();
    await signupRepeatPassword.fill("12345678aA");
    await expect(registerBtn).toBeVisible();
    await expect(registerBtn).toBeEnabled();
  });

  test("successful registration", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const signupLastName = modal.locator("#signupLastName");
    const signupEmail = modal.locator("#signupEmail");
    const signupPassword = modal.locator("#signupPassword");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const registerBtn = modal.locator(".btn-primary", { hasText: "Register" });

    await signupName.focus();
    await signupName.fill(faker.person.firstName());
    await signupLastName.focus();
    await signupLastName.fill(faker.person.lastName());
    await signupEmail.focus();
    await signupEmail.fill(
      `aqa-jhon${faker.number.int({ min: 10, max: 99 })}@test.qa`
    );
    await signupPassword.focus();
    await signupPassword.fill("12345678aA");
    await signupRepeatPassword.focus();
    await signupRepeatPassword.fill("12345678aA");
    await expect(registerBtn).toBeVisible();
    await expect(registerBtn).toBeEnabled();

    await registerBtn.click();

    await expect(page).toHaveURL("https://qauto.forstudy.space/panel/garage");
  });
});

//Name
test.describe("validation field Name", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("empty field", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const error = modal.locator(".invalid-feedback");

    await signupName.focus();
    await signupName.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText("Name required");
  });

  test("wrong data", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const error = modal.locator(".invalid-feedback");
    const paragraphes = error.locator("p");

    await signupName.focus();
    await signupName.fill("2");
    await signupName.blur();

    await expect(error).toBeVisible();
    await expect(paragraphes).toHaveCount(2);

    await expect(paragraphes.nth(0)).toHaveText("Name is invalid");
    await expect(paragraphes.nth(1)).toHaveText(
      "Name has to be from 2 to 20 characters long"
    );
  });

  test("wrong length 1 letter", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const error = modal.locator(".invalid-feedback");

    await signupName.focus();
    await signupName.fill("a");
    await signupName.blur();

    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Name has to be from 2 to 20 characters long"
    );
  });

  test("wrong length 21 letter", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const error = modal.locator(".invalid-feedback");

    await signupName.focus();
    await signupName.fill("qqqqqqqqqqqqqqqqqqqqq");
    await signupName.blur();

    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Name has to be from 2 to 20 characters long"
    );
  });

  test("error border color", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupName = modal.locator("#signupName");
    const error = modal.locator(".invalid-feedback");

    await signupName.focus();
    await signupName.blur();

    await expect(error).toBeVisible();
    await expect(signupName).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});

//LastName
test.describe("validation field Last Name", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("empty field", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupLastName = modal.locator("#signupLastName");
    const error = modal.locator(".invalid-feedback");

    await signupLastName.focus();
    await signupLastName.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText("Last name required");
  });

  test("wrong data", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupLastName = modal.locator("#signupLastName");
    const error = modal.locator(".invalid-feedback");
    const paragraphes = error.locator("p");

    await signupLastName.focus();
    await signupLastName.fill("2");
    await signupLastName.blur();

    await expect(error).toBeVisible();
    await expect(paragraphes).toHaveCount(2);

    await expect(paragraphes.nth(0)).toHaveText("Last name is invalid");
    await expect(paragraphes.nth(1)).toHaveText(
      "Last name has to be from 2 to 20 characters long"
    );
  });

  test("wrong length 1 letter", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupLastName = modal.locator("#signupLastName");
    const error = modal.locator(".invalid-feedback");

    await signupLastName.focus();
    await signupLastName.fill("b");
    await signupLastName.blur();

    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Last name has to be from 2 to 20 characters long"
    );
  });

  test("wrong length 21 letter", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupLastName = modal.locator("#signupLastName");
    const error = modal.locator(".invalid-feedback");

    await signupLastName.focus();
    await signupLastName.fill("qqqqqqqqqqqqqqqqqqqqq");
    await signupLastName.blur();

    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Last name has to be from 2 to 20 characters long"
    );
  });

  test("error border color", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupLastName = modal.locator("#signupLastName");
    const error = modal.locator(".invalid-feedback");

    await signupLastName.focus();
    await signupLastName.blur();

    await expect(error).toBeVisible();
    await expect(signupLastName).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});

//Email
test.describe("validation field Email", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("empty field", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupEmail = modal.locator("#signupEmail");
    const error = modal.locator(".invalid-feedback");

    await signupEmail.focus();
    await signupEmail.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText("Email required");
  });

  test("wrong data", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupEmail = modal.locator("#signupEmail");
    const error = modal.locator(".invalid-feedback");

    await signupEmail.focus();
    await signupEmail.fill("ali");
    await signupEmail.blur();

    await expect(error).toBeVisible();
    await expect(error).toHaveText("Email is incorrect");
  });

  test("error border color", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupEmail = modal.locator("#signupEmail");
    const error = modal.locator(".invalid-feedback");

    await signupEmail.focus();
    await signupEmail.blur();

    await expect(error).toBeVisible();
    await expect(signupEmail).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});

//Password
test.describe("validation field Password", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("empty field", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupPassword = modal.locator("#signupPassword");
    const error = modal.locator(".invalid-feedback");

    await signupPassword.focus();
    await signupPassword.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText("Password required");
  });

  test("wrong data", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupPassword = modal.locator("#signupPassword");
    const error = modal.locator(".invalid-feedback");

    await signupPassword.focus();
    await signupPassword.fill("123");
    await signupPassword.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
  });

  test("error border color", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupPassword = modal.locator("#signupPassword");
    const error = modal.locator(".invalid-feedback");

    await signupPassword.focus();
    await signupPassword.blur();

    await expect(error).toBeVisible();
    await expect(signupPassword).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});

//Re-enter password
test.describe("validation field Re-enter password", () => {
  test.beforeEach("open reistration popup", async ({ page }) => {
    await page.goto("/");
    const signUpBtn = page.locator(".btn-primary", { hasText: "Sign up" });
    await signUpBtn.click();
  });

  test("empty field", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const error = modal.locator(".invalid-feedback");

    await signupRepeatPassword.focus();
    await signupRepeatPassword.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText("Re-enter password required");
  });

  test("wrong data", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const error = modal.locator(".invalid-feedback");

    await signupRepeatPassword.focus();
    await signupRepeatPassword.fill("123");
    await signupRepeatPassword.blur();
    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
  });

  test("error border color", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const error = page.locator("text=Passwords do not match");

    await signupRepeatPassword.focus();
    await signupRepeatPassword.blur();

    // await expect(error).toBeVisible();
    await expect(signupRepeatPassword).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  test("password don't match", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const signupPassword = modal.locator("#signupPassword");
    const signupRepeatPassword = modal.locator("#signupRepeatPassword");
    const error = modal.locator(".invalid-feedback");


    await signupPassword.fill("1234567aA");
    await signupRepeatPassword.fill("1234567aZ");
    await signupRepeatPassword.blur();

    // await expect(error).toBeVisible();
    await expect(error).toHaveText("Passwords do not match");
  });
});
