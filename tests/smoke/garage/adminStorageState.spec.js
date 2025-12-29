import {adminFixture} from "../../../src/customFixtures/adminFixture.js";

adminFixture.describe("use storage state @my-label", () => {

    adminFixture('Create car', async ({page, garagePage}) => {

        await adminFixture.step("Verify created car details", async () => {
            await page.pause()
        })
    })
})