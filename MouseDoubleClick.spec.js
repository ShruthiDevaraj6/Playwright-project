import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Mouse Double Click', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  const dbbtn = await page.locator("//button[normalize-space()='Copy Text']")
  await dbbtn.dblclick()

  const field2 = await page.locator('#field2')
  await expect(field2).toHaveValue('Hello World!')
  
  await page.waitForTimeout(5000)
});