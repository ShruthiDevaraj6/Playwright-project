import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Radio buttons', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  await page.locator('#gender-female').check()
  await expect (await page.locator('#gender-female')).toBeChecked()
  await expect (await page.locator('#gender-female').isChecked()).toBeTruthy()
  //Negative testing for male radio btn
  await expect (await page.locator('#gender-male').isChecked()).toBeFalsy()
  
});