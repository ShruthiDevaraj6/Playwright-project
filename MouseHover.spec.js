import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Mouse Hover', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  
  const desktop = await page.locator("//a[normalize-space()='Desktops']")
  const mac = await page.locator("//a[normalize-space()='Mac (1)']")

  await desktop.hover()
  await mac.hover()


  await page.waitForTimeout(5000)
});