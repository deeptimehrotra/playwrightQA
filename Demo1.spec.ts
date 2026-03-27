import { test, expect } from '@playwright/test';

test.only('test01 - has title', async ({ page }) => {
  await page.goto('https://www.ixigo.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ixigo - Best Travel Website, Book Flights, Trains, Hotels & Buses/);
});

test.skip('test02 -  has flights screen', async ({ page }) => {
  await page.goto('https://www.ixigo.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'flights' }).click();
  await expect(page).toHaveTitle(/Flight Booking, Cheap Flights, Air Tickets at Lowest Fare | ixigo/);
});
