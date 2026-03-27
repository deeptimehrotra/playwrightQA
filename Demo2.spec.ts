import { test, expect } from '@playwright/test';

test('new website', async ({ page ,browserName}) => {
    test.skip(browserName !== 'chromium', 'this test will run only in chrome');
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('heading', { name: 'Register' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill('deepti');
    await page.getByPlaceholder('Last Name').fill('mehrotra');
    await page.getByTestId('EmailAdress').fill('deeptitest.com');
    await page.getByTestId('Phone').fill('234567');
    await page.getByLabel('Female').click();
});
