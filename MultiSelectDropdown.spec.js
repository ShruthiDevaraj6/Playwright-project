import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Multi select Dropdowns', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.selectOption('#colors',['Red','Blue','Yellow'])

  //check for number of options in the dropdown
  const options = await page.locator('#colors option')
  await expect(options).toHaveCount(5)
  //print those 5 options
  const array = await page.$$('#colors option')
  console.log("Number of options: ", array.length)

  //check presensce of value in the dropdown
  const content = await page.locator('#colors').textContent()
  await expect(content.includes('White')).toBeTruthy()

  await page.waitForTimeout(5000)
  
});