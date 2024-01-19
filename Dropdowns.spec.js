import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Dropdowns', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#country').selectOption({label: 'Japan'})
  await page.locator('#country').selectOption({value: 'uk'})
  await page.locator('#country').selectOption({index: 1})
  await page.waitForTimeout(5000)

  //Assertions
  //check number of options in the dropdown
  const option = await page.locator('#country option')
  await expect(option).toHaveCount(10)

  //check if particular value is present in the dropdown
  const content = await page.locator('#country').textContent()
  await expect(content.includes('India')).toBeTruthy()

  //print all the dropdown options in the console
  const lists = await page.$$('#country option')
  let status = false;
  for (const list of lists ){
    console.log(await list.textContent())
    //check if France is available on the list
    let value = await list.textContent()
    if(value.includes('France'))
    {
      status = true;
      break;
    }
  } 
  expect (status).toBeTruthy()
  
});