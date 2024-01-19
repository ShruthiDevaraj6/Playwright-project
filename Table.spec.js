import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  //total number of rows and colums
  const table = await page.locator('#productTable')
  const columns = await table.locator('thead tr th')
 // console.log('Number of columns:', await columns.count())

  const rows = await table.locator('tbody tr')
  //console.log('Number of rows:',await rows.count())

  expect(await columns.count()).toBe(4)
  expect(await rows.count()).toBe(5)

  //select checkbox for product 5
//    const matchedRow = rows.filter({
//     has: page.locator('td'),
//     hasText: 'Product 5'
//   })
  //matchedRow.locator('input').check()

//select multiple products 
await selectProduct(rows,page,'Product 2')
await selectProduct(rows,page,'Product 3')
await selectProduct(rows,page,'Product 5')

//print all product details using loop
/*for(let i=0;i<await rows.count();i++){
    const row = rows.nth(i)
    const tds =row.locator('td')

    for(let j=0;j<await tds.count()-1;j++){
       console.log(await tds.nth(j).textContent())
    }
}*/

//read data from all paginations

const pages = await page.locator('.pagination li a')//count number of pages
console.log('Number of pages in the table:',await pages.count())
    for(let p=0;p< await pages.count();p++)
    {
        if(p>0){
            await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++){
            const row = rows.nth(i)
            const tds =row.locator('td')
        
            for(let j=0;j<await tds.count()-1;j++){
               console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000)  
    }


  await page.waitForTimeout(5000)
});
async function selectProduct(rows, page, name)
  {
            const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: name
          })
          await matchedRow.locator('input').check()
  }