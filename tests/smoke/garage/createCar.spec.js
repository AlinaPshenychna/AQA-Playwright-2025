import { expect, test } from "@playwright/test";

test.describe("Create car as guest user", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByText("Guest log in").click();
  });

  test("Create car", async ({ page }) => {
    const brand = "Audi";
    const model = "TT";
    const mileage = "222";

    await page.getByRole("button", { name: "Add car" }).click();

    await page.getByLabel("Brand").selectOption(brand);
    await page.getByLabel("Model").selectOption(model);

    await page.getByRole("spinbutton", { name: "Mileage" }).fill(mileage);
    await page.getByRole("button", { name: "Add" }).click();

    const carCard = page.locator("div.car");

    await expect(carCard, "Car should have valid brand").toContainText(brand);
    await expect(carCard, "Car should have valid model").toContainText(model);
    await expect(
      carCard.locator('[name="miles"]'),
      "Car should have valid mileage"
    ).toHaveValue(mileage);
  });
});
