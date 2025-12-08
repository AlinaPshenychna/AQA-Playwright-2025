import { expect } from "@playwright/test";
import BaseComponent from "../../BaseComponent.js";

export default class RegistrationPopup extends BaseComponent {
  constructor(page) {
    super(page, page.locator(".modal-content"));

    this.inputName = this.root.locator("#signupName");
    this.inputLastName = this.root.locator("#signupLastName");
    this.inputEmail = this.root.locator("#signupEmail");
    this.inputPassword = this.root.locator("#signupPassword");
    this.inputRepeatPassword = this.root.locator("#signupRepeatPassword");
    this.registerBtn = this.root.locator("button.btn-primary");
    this.errors = this.root.locator(".invalid-feedback");
  }

  async fillForm({ name, lastName, email, password }) {
    await this.inputName.fill(name);
    await this.inputLastName.fill(lastName);
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(password);
    await this.inputRepeatPassword.fill(password);
  }

  async submit() {
    await this.registerBtn.click();
  }
  async register(userData) {
    await this.fillForm(userData);
    await this.submit();
  }
}
