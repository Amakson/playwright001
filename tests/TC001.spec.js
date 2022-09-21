//import test module
const {test, expect} = require('@playwright/test');
//const { expect } = require('../../playwright.config'); - Not the right package for 'expect'


//Javascript is asynchronos so use ASYNC in the function and AWAIT for every necessary step
// Instead 'function()' use '()=>' to make your code light weight
// Fixtures are global variable which are available accross your project
//Add BROWSER fixture in order to be able to us e it in your script {browser}
//Asserion comes as part of Playwright package, unlike other tools (Mocha, Chai etc)
test("Browser Context", async ({browser})=>
{
  const driver = await browser.newContext();
  const page = await driver.newPage();
  await page.goto("http://test-amplify-vue.s3-website-us-east-1.amazonaws.com/login")
  //get title
  console.log(await page.title());

  //assertion
  await expect(page).toHaveTitle("TEST AMPLIFY");
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});


test("Page Context", async ({page})=>
{
  await page.goto("http://test-amplify-vue.s3-website-us-east-1.amazonaws.com/login")
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
  