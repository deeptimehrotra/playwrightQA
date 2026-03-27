import { test, expect } from '@playwright/test';

test('new website', async ({ page ,browserName}) => {
    const url = 'Register.html';
    const names = ['deepti' , 'dhaniram'];
    await page.goto(url);
    await page.getByRole('heading', { name: 'Register' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill(names[0]);
    await page.getByPlaceholder('Last Name').fill(names[1]);
    await page.getByTestId('Adress').fill('Richmond');
    await page.getByTestId('EmailAdress').fill('deepti@gmail.com');
    await page.getByTestId('Phone').fill('34567');
    await page.getByTestId('radiovalue').check();
});