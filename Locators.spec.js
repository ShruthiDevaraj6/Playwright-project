const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    //click on login button - Login
    await page.click('id=login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("//button[normalize-space()='Log in']")
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible()
    await page.close()

  });  