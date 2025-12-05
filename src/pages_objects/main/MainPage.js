import { expect } from "@playwright/test";
import BasePage from "../BasePage.js";

export default class MainPage extends BasePage {
  constructor(page) {
    super(page, "/");
    this.guestLoginBtn = page.getByText("Guest log in");
  }

  async loginAsGuest() {
    await this.guestLoginBtn.click();
    await expect(this.page.getByText("Log out")).toBeVisible();
  }
}
