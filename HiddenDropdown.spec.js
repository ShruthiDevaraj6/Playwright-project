import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Hidden Dropdowns', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await page.locator("input[placeholder='Username']").fill('Admin')
  await page.locator("input[placeholder='Password']").fill('admin123')
  await page.locator("button[type='submit']").click()
  await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
  //click on dropdown
  await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click()

await page.waitForTimeout(3000)
const options = await page.$$("//div[@role='listbox']//span")
for(let option of options){
    const jobTitle = await option.textContent()
    //console.log(jobTitle)
    if(jobTitle.includes('QA Lead')){
       await option.click()
       break;
    }

}
await page.waitForTimeout(5000)

});