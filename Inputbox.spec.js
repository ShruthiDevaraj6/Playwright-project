import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Input box', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  //check if input box is visible
  await expect (await page.locator('#FirstName')).toBeVisible()
  //check if input box is empty
  await expect (await page.locator('#FirstName')).toBeEmpty()
  //check if input box is editable
  await expect (await page.locator('#FirstName')).toBeEditable()
  await expect (await page.locator('#FirstName')).toBeEnabled()
  await page.locator('#FirstName').fill("Syra")
  
  
});