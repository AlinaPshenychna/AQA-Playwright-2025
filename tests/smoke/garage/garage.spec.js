import { test, expect } from "../../../src/customFixtures/userGarageFixture.js";

test("admin sees garage page", async ({ userGaragePage }) => {
  await expect(userGaragePage.addCarBtn).toBeVisible();
});

test("admin can add car", async ({ userGaragePage }) => {
  await userGaragePage.createCar({
    brand: "BMW",
    model: "X5",
    mileage: "12000",
  });

  const carCard = userGaragePage.getCarCard({
    brand: "BMW",
    model: "X5",
  });

  await expect(carCard.root).toBeVisible();
});
