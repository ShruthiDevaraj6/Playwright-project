import { test, expect } from '@playwright/test';
import exp from 'constants';
//login 
let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    
});
//logout
test.afterAll( async () => {
    await page.locator('#logout2').click()
  
});

test('Homepage Test', async () => {
    
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
  
});

test('Add product to cart', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()
    //Handling alert
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
      })
});