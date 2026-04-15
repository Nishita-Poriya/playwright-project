import { test, expect } from '@playwright/test';

test('Google Search Test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright');
  await page.press('textarea[name="q"]', 'Enter');

  await expect(page).toHaveURL(/search/);
});