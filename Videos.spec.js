import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Record video', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

});


