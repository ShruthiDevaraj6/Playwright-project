import { test, expect } from '@playwright/test';
import exp from 'constants';

test.skip('Alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //enabling alert handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
  })
  await page.click("//button[normalize-space()='Alert']")
  await page.waitForTimeout(5000)
});

test.skip('Confirmation dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    //enabling alert handler
    page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain('Press a button!')
      await dialog.accept()
      //or await dialog.dismiss()
    })
    await page.click("//button[normalize-space()='Confirm Box']")
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)
  });

  test('Prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    //enabling alert handler
    page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('prompt')
      expect(dialog.message()).toContain('Please enter your name:')
      expect(dialog.defaultValue()).toContain('Harry Potter')
      await dialog.accept('Syra')
      //or await dialog.dismiss()
    })
    await page.click("//button[normalize-space()='Prompt']")
    await expect(page.locator('#demo')).toHaveText('Hello Syra! How are you today?')
    await page.waitForTimeout(5000)
  });