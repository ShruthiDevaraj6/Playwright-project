import { test, expect } from '@playwright/test';
import exp from 'constants';

test.skip('Single file', async ({ page }) => {
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('e2e/uploadFiles/Shruthi Devaraj CV December.pdf')
  
  
  await page.waitForTimeout(5000)
});

test('Multiple files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForSelector('#filesToUpload')

    await page.locator('#filesToUpload').setInputFiles(['e2e/uploadFiles/Shruthi Devaraj CV December.pdf','e2e/uploadFiles/Tieturi.fi - Robot Framework and test automation.pdf'])
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('Shruthi Devaraj CV December.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('Tieturi.fi - Robot Framework and test automation.pdf')

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)

});