import {guestTest} from "../../../src/customFixtures/guestFixture.js";

guestTest.describe("Intercept request", () => {
    guestTest('Abort get car brands', async ({garagePage, page}) => {
        await guestTest.step("Create a new car", async () => {
            await page.route("**/cars/brands", async (route)=>{
                await route.abort('internetdisconnected')
            })
           await garagePage.openAddCarPopup()
           await page.pause()
        })
    })


    guestTest('mock car brands', async ({garagePage, page}) => {
        const mockedBrands = {
            "status": "ok",
            "data": [
                {
                "id": 1,
                "title": "Hello",
                "logoFilename": "audi.png"
            },
                {
                "id": 2,
                "title": "World",
                "logoFilename": "bmw.png"
            }
            ]
        }
        await guestTest.step("Create a new car", async () => {
            await page.route("**/cars/brands", async (route)=>{
                await route.fulfill({
                    status: 200,
                    body: JSON.stringify(mockedBrands)
                })
            })
            await garagePage.openAddCarPopup()
            await page.pause()
        })
    })
})