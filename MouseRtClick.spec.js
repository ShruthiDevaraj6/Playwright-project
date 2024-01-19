import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Mouse Right Click', async ({ page }) => {
  await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
  
  const btn = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
  await btn.click({btn: 'right'})
  
  await page.waitForTimeout(5000)
});