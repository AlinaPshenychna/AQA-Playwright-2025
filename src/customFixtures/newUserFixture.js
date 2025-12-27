import { baseCustomFixture as base } from "./baseCustomFixture.js";
import GaragePage from "../pages_objects/garage/GaragePage.js";

// withNewUser
export const newUserTest = base.extend({
    userData: async ({}, use)=> {
        const data = {
            email: `user${Date.now()}@testmail.com`,
            password: 'TestPassword123!',
            firstName: 'John',
            lastName: 'Doe'
        }
        await use(data)
    },
    garagePage: async ({page, mainPage, userData}, use)=> {
        // register new user with mainPage using data from userData fixture
        // OR create user via API
        await use (new GaragePage(page))
        // DELETE USER VIA API
    },
})