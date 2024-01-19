import { test, expect } from '@playwright/test';
import exp from 'constants';
//only
/*test.only('test1', async ({ page }) => {
  console.log('this is test1')
});*/
//skip
test.skip('test2', async ({ page }) => {
    console.log('this is test2')
});
//skip based on condition - only this will pass bcz in playwright.config.js - browsername is mentioned as chromium so below will fail
/*test('test3', async ({ page, browserName }) => {
    console.log('this is test3')
    if(browserName=='firefox')
    {
        test.skip()
    }
});*/
//fixme - same as skip
test('test4', async ({ page }) => {
    test.fixme()
    console.log('this is test4')
});
//Fail - if both below exp and actual will fail, then test case will pass, if actual is passed but expected is fail then test will fail
/*test('test5', async ({ page }) => {
    test.fail()//expected
    console.log('this is test5')
    expect(1).toBe(1) //actual
});*/
//slow - by default timeout is 30 sec but if you change the timeout in playwright.congig.js to 2 sec then the test will fail so we use slow
test('test6', async ({ page }) => {
    test.slow() // this will triple the time in timeout (playwright.config.js)
    console.log('this is test6')
    await page.goto('https://demoblaze.com/index.html')
});