import { test, expect } from '@playwright/test';

// Reusable login function
// This avoids repeating login steps in multiple tests
async function login(page) {

  // Open the website
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Hover on "My Account" to display dropdown menu
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");

  // Click on Login option from dropdown
  await page.click("text=Login");

  // Enter email (using CSS selector)
  await page.fill("input[name='email']", "koushik350@gmail.com");

  // Enter password
  await page.fill("input[name='password']", "Pass123$");

  // Click Login button
  await page.click("input[value='Login']");
}

test('Login flow with context, new tab and new window', async ({ browser }) => {

  // Create a new browser context (acts like a fresh browser session)
  const context = await browser.newContext();

  // Open first page (this acts like the first tab)
  const page = await context.newPage();

  // Perform login using reusable function
  await login(page);

  // Wait for a few seconds to observe login result,
  await page.waitForTimeout(5000);

  // Open a new tab in the SAME context
  // This shares session, cookies and login state
  const newTab = await context.newPage();
  await newTab.goto('https://ecommerce-playground.lambdatest.io/');
  await newTab.waitForTimeout(5000);

  // Create a new context (completely new browser session)
  // This behaves like opening a new window/incognito
  const newContext = await browser.newContext();

  // Open a page in new context (new window)
  const newWindow = await newContext.newPage();
  await newWindow.goto('https://ecommerce-playground.lambdatest.io/');
  await newWindow.waitForTimeout(5000);
});
