import { expect } from "@playwright/test";
import BasePage from "../BasePage.js";

export default class SignupPage extends BasePage {
  constructor(page) {
    super(page, "/");
    this.signupBtn = page.getByText("Sign up");
  }

  async openSignupPopup() {
    await this.signupBtn.click();
    await expect(this.page.getByClass(".modal-open")).toBeVisible();
  }
}
