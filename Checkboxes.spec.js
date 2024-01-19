import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Checkboxes', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  //single checkbox
  await page.locator('input[value="Pen"][name="accessories"]').check()
  await expect (await page.locator('input[value="Pen"][name="accessories"]')).toBeChecked()
  await expect (await page.locator('input[value="Pen"][name="accessories"]').isChecked()).toBeTruthy()

  //check for unchecked checkbox
  await expect (await page.locator('input[value="Laptop"][name="accessories"]').isChecked()).toBeFalsy()

  //Multiple checkboxes
  const checkboxes=[
    'input[value="Pen"][name="accessories"]',
    'input[value="Laptop"][name="accessories"]',
    'input[value="Bag"][name="accessories"]'

  ];
  for(const locator of checkboxes){
    await page.locator(locator).check()
  }
  await page.waitForTimeout(5000)
//uncheck checkboxes
  for(const locator of checkboxes){
    if(await page.locator(locator).isChecked())
    {
    await page.locator(locator).uncheck()
    }
  }


  await page.waitForTimeout(5000)
  
});