import {test as base} from "playwright/test";
import MainPage from "../pages_objects/main/MainPage";

export const baseCustomFixture = base.extend({
    mainPage: async ({page}, use)=> {
        // before test
        const mainPage = new MainPage(page)
        await mainPage.navigate()
        // pass the fixture value to the test
        await use(mainPage)
        // after test
        //...
    },
})