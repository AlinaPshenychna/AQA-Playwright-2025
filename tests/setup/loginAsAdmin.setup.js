import { test as setup } from "@playwright/test";
import MainPage from "../../src/pages_objects/main/MainPage";

setup("Login as admin", async ({ page, context }) => {
  // store in .env file
  const adminCredentials = {
    email: "staranadmin@test.com",
    password: "Password123",
  };

  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.loginWithCredentials(adminCredentials);

  await context.storageState({
    path: "state/adminStorageState.json",
  });
});
