import {expect, test} from "@playwright/test"
import { faker } from '@faker-js/faker';


// cy.get('.my-class')  -- this is how to get element in cypress
// page.locator('.my-class')  -- this is how to get element in playwright

// const elements = page.locator('.list-item')
// const elementsActive = elements.filter({hasText: 'Active'})

test.describe.skip("Signup tests", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })


    test("multiple elements handling", async ({page}) => {
        const headerNavLinks = page.locator('nav button').or(page.locator('nav a'))
        const firstNavLink = headerNavLinks.first()
        const lastNavLink = headerNavLinks.last()
        const parent = headerNavLinks.locator("..")

        // for i + count
        const count = await headerNavLinks.count()
        for (let i = 0; i < count; i++) {
            const el = headerNavLinks.nth(i)
            await expect(el, 'Nav link should be visible').toBeVisible()
        }

        // for of + all()
        const allNavLinks = await headerNavLinks.all()
        //array of locators
        for (const el of allNavLinks) {
            // DON'T DO THIS IN PLAYWRIGHT!!!
            // const isVisible = await el.isVisible()
            // expect(isVisible, "Element should be visible").toBe(true)

            // DO THIS IN PLAYWRIGHT!!!
            await expect(el, 'Nav link should be visible').toBeVisible()
        }
    })

    test('Signup with valid credentials 1', async ({page}) => {

        // const password = `Qwerty${faker.number.int({min: 100, max: 999})}`
        // const userData = {
        //     "name": faker.person.firstName(),
        //     "lastName": faker.person.lastName(),
        //     "email": faker.internet.email(),
        //     "password": password,
        //     "repeatPassword": password
        // }
        //
        // const signupButton = page.locator('.btn-primary')
        // await signupButton.click()
        //
        // const signupPopup = page.locator('.modal-content')
        // const nameInput = signupPopup.locator('#signupName')
        // const lastNameInput = signupPopup.locator('#signupLastName')
        // const emailInput = signupPopup.locator('#signupEmail')
        // const passwordInput = signupPopup.locator('#signupPassword')
        // const repeatPasswordInput = signupPopup.locator('#signupRepeatPassword')
        // const submitButton = signupPopup.locator('.btn-primary')
        //
        //
        // await nameInput.fill(userData.name)
        // await lastNameInput.fill(userData.lastName)
        // await emailInput.fill(userData.email)
        // await passwordInput.fill(userData.password)
        // await repeatPasswordInput.fill(userData.repeatPassword)
        // await submitButton.click()

    })


    test('Signup with valid credentials 2', async ({page}) => {
        const password = `Qwerty${faker.number.int({min: 100, max: 999})}`
        const userData = {
            "name": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "password": password,
            "repeatPassword": password
        }

        // const aboutBtn =  page.getByText('About')
        // const header = page.locator('.header_inner', {has : aboutBtn })

        // const signupButton = page.locator('.btn-primary')
        // const signupButton = page.locator('.btn-primary', {hasText: 'Sign up'})
        // const signupButton = page.getByText('Sign up')
        const signupButton = page.getByRole("button", {name: 'Sign up'})
        await signupButton.click()

        const signupPopup =  page.locator('.modal-content')
        await signupPopup.locator('#signupName').fill(userData.name)
        await signupPopup.locator('#signupLastName').fill(userData.lastName)
        await signupPopup.locator('#signupEmail').fill(userData.email)
        await signupPopup.locator('#signupPassword').fill(userData.password)
        await signupPopup.locator('#signupRepeatPassword').fill(userData.repeatPassword)
        await signupPopup.locator('.btn-primary').click()
    })


    test('wrong email format validation', async ({page}) => {
        // const signupButton = page.getByRole("button", {name: 'Sign up'})
        // await signupButton.click()

        // const signupPopup =  page.locator('.modal-content')
        // const emailInput = signupPopup.locator('#signupEmail')
        // await emailInput.fill("wrong-email-format")
        // await emailInput.blur()

        // await expect(signupPopup, "Signup popup should have validation").toHaveScreenshot("signup-validation.png")
    })

})