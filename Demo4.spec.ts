import { test, expect } from '@playwright/test';

test.only('Browser context', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto('https://www.yahoo.com/');
  // Expect a title "to contain" a substring.
     await expect(page1).toHaveTitle(/yahoo/);
});
