const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { type } = require('os');

test('Assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logo = await page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible()

    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    const radioBtn = await page.locator('#gender-female')
    await radioBtn.click()
    await expect(radioBtn).toBeChecked()

    const newsletterchkbox = await page.locator('#Newsletter')
    await expect(newsletterchkbox).toBeChecked()

    const regBtn = await page.locator('#register-button')
    await expect(regBtn).toHaveAttribute('type','submit')

    await expect (await page.locator("div[class='page-title'] h1")).toHaveText('Register')
    //or you can write like below also
    await expect (await page.locator("div[class='page-title'] h1")).toContainText('Reg')

    const email = await page.locator('#Email')
    await email.fill('test@demo.com')
    await expect(email).toHaveValue('test@demo.com')

    const options = await page.locator('select[name="DateOfBirthDay"] option')
    await expect(options).toHaveCount(32)

  });  