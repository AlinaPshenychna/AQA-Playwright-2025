import { expect } from "@playwright/test";
import BasePage from "../BasePage.js";
import RegistrationPopup from "./components/RegistrationPopupPage.js";

export default class MainPage extends BasePage {
  constructor(page) {
    super(page, "/");
    this.guestLoginBtn = page.getByText("Guest log in");
    this.signUpBtn = page.getByRole("button", { name: "Sign up" });

    this.registrationPopup = new RegistrationPopup(page);
  }

  async loginAsGuest() {
    await this.guestLoginBtn.click();
    await expect(this.page.getByText("Log out")).toBeVisible();
  }

  async openSignupPopup() {
    await this.signUpBtn.click();
    await this.registrationPopup.root.waitFor({ state: "visible" });
    return this.registrationPopup;
  }
}
