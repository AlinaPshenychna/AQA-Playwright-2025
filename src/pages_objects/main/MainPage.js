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

      async loginWithCredentials({email, password}){
        await this.page.getByText('Sign In').click()
        const modal = this.page.locator('.modal-body')
        await modal.locator('#signinEmail').fill(email)
        await modal.locator('#signinPassword').fill(password)
        await this.page.getByText('Login').click()
        // await expect(this.page.getByText('Log out')).toBeVisible()
    }
}
