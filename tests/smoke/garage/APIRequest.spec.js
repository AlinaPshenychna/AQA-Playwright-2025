import { test, expect, request } from "@playwright/test";

test.describe("API Tests for POST /api/cars", () => {
  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      baseURL: "https://qauto.forstudy.space/api",
      extraHTTPHeaders: {
        "Content-Type": "application/json",
      },
    });
  });

  test("Create car - positive scenario", async () => {
    const newCar = { brand: "Toyota", model: "Corolla", year: 2023, color: "red" };
    const response = await apiContext.post("/cars", { data: newCar });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty("id");
  });

  test("Create car - missing required fields", async () => {
    const incompleteCar = { brand: "Honda" };
    const response = await apiContext.post("/cars", { data: incompleteCar });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("Create car - invalid data types", async () => {
    const invalidCar = { brand: "Ford", model: "Focus", year: "дві тисячі двадцять три", color: 123 };
    const response = await apiContext.post("/cars", { data: invalidCar });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });
});
