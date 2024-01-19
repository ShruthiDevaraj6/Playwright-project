import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Soft assertions', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  //Hard assertion will terminate the entire execution if one expect fails so we go for soft assertion
  /*await expect(page).toHaveTitle('STORE')
  await expect(page).toHaveURL('https://demoblaze.com/index.html')
  await expect(page.locator('#nava')).toBeVisible()*/

  //Soft assertion
  await expect.soft(page).toHaveTitle('STORE123') //fail this purposely so this fails and the below 2 will pass
  await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
  await expect.soft(page.locator('#nava')).toBeVisible()
});