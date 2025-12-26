import {guestTest} from "../../../src/customFixtures/guestFixture.js";

guestTest.describe("Create car as guest user (Fixtures) @my-label", () => {
    guestTest('Create car', async ({garagePage}) => {
        const brand = 'Audi'
        const model = 'TT'
        const mileage = '222'

        await guestTest.step("Create a new car", async () => {
            const addCarPopup = await garagePage.openAddCarPopup()
            await addCarPopup.createCar({brand, model, mileage})
        })

        await guestTest.step("Verify created car details", async () => {
            const carCard = await garagePage.getCarCard({brand, model})
            await carCard.assertBrand(brand)
            await carCard.assertModel(model)
            await carCard.assertMileage(mileage)
        })
    })
})