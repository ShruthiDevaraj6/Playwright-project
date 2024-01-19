import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Page screenshot', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.screenshot({path:'e2e/Screenshots/'+ Date.now()+'Homepage.png'})

});

test('Full screen screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path:'e2e/Screenshots/'+ Date.now()+'Fullpage.png',fullPage:true})
  
  });

  test.only('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await page.locator('//*[@id="content"]/div[2]/div[4]/form/div').screenshot({path:'e2e/Screenshots/'+ Date.now()+'Camera.png'})
  
  });