import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Boot strap Dropdowns', async ({ page }) => {
  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
 
  await page.locator('.multiselect').click()
  //find total number of options
  const options = await page.locator('ul>li label input')
  await expect(options).toHaveCount(11)
  //select multiple options from the dropdown
  //print options on the log
  const lists = await page.$$('ul>li label')
  for(let list of lists){
    const value = await list.textContent()
    console.log("Values are", value)
    if (value.includes('C#')|| value.includes('Python')){
        await list.click()

    }
  }

  //deselect options
  const lists1 = await page.$$('ul>li label')
  for(let list of lists1){
    const value = await list.textContent()
    
    if (value.includes('HTML')|| value.includes('CSS')){
        await list.click()

    }
  }
await page.waitForTimeout(3000)

});