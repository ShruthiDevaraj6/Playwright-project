const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { type } = require('os');

test('Built in Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = await page.getByAltText('company-branding') //any element which has alt attribute, here it is logo
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill("Admin")    ////any element which has placeholder attribute, here it is username & pwd
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button', {type: 'submit'}).click() //for buttons, links etc

    const name = await page.locator('.oxd-userdropdown-name').textContent()
    await expect(await page.getByText(name)).toBeVisible()
  });  