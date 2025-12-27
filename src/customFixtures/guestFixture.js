import { baseCustomFixture as base } from "./baseCustomFixture.js";
import GaragePage from "../pages_objects/garage/GaragePage.js";

// withGuestAccount
export const guestTest = base.extend({
    garagePage: async ({page, mainPage}, use)=> {
        await mainPage.loginAsGuest()
        await use (new GaragePage(page))
    },
})