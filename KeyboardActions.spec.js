import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Keyboard actions', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare');
  
  await page.locator('[name="text1"]').fill("Happy New Year 2024")
  //Ctrl A to select the text
  await page.keyboard.press('Control+A')
  //Ctrl C to copy
  await page.keyboard.press('Control+C')
  //Tab to move to next
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')
  //Ctrl V to paste
  await page.keyboard.press('Control+V')
  
  
  await page.waitForTimeout(5000)
});