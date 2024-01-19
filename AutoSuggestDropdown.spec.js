import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Autosuggest Dropdowns', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
 
  await page.locator('#src').fill('Bengaluru')
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
  const searchOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

  for (let option of searchOptions){
    const value = await option.textContent()
    //console.log(value)
    if(value.includes('Karkala'))
    {
        await option.click()
        break;
    }
  }
  
await page.waitForTimeout(3000)

});