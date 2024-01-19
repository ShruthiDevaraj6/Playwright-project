import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Date Picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 // await page.fill('#datepicker','12/06/2023')//Aproach 1
//Approach 2
 const year = "2022"
 const month = "December"
 const date = "02"
 await page.click('#datepicker')
 while(true)
 {
    const currentYear = await page.locator('.ui-datepicker-year').textContent()
    const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth == month)
        {
            break;
        }

       // await page.locator('[title="Next"]').click();
       await page.locator('[title="Prev"]').click();
 }
 const dates = await page.$$("//a[@class='ui-state-default']")
 for(const dt of dates ){
    if(await dt.textContent()==date){
        await dt.click()
        break;
    }
 }

  await page.waitForTimeout(5000)
});