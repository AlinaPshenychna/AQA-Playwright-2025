import { chromium } from "@playwright/test";

(async function () {
  // Make sure to run headed.
  const browser = await chromium.launch({ headless: false });

  // Setup context however you like.
  const context = await browser.newContext({
    httpCredentials: {
      username: "guest",
      password: "welcome2qauto",
    },
  });
  // await context.route('**/*', route => route.continue());

  // Pause the page, and start recording manually.
  const page = await context.newPage();
  await page.goto("https://qauto.forstudy.space/");
//   await page.pause();

   // close context !!!!
  await context.close();

  // close browser. !!!!!
  await browser.close();

})();





// example
// try {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto(...);
// } finally {
//   await context?.close();
//   await browser?.close();
// }



// await page.pause(); stops test and open playwright insector