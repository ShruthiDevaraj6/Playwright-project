const { test, expect } = require('@playwright/test');

test('Locate multiple elements', async ({ page }) => {
    //capture all link names on the homepage
     await page.goto('https://demoblaze.com/index.html');
    // const allLinks = await page.$$('a')
    // for(const link of allLinks)
    // {
    //     const linkText = await link.textContent()
    //     console.log(linkText)
    

    //capture all products on page
    page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
    for(const prod of products) {
        const prodName = await prod.textContent()
        console.log(prodName)
    }
  });  