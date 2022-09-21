// @ts-check
const { devices } = require('@playwright/test');



/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  reporter: [ ['junit', { outputFile: 'results.xml' }] ],
  use: {
      //which browser?
      browserName: 'chromium',
      headless: false
  },
 
};

module.exports = config;
