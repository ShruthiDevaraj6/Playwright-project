import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Nested Frames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  
  const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})//right click on frmae 1 and copy link address from inspect
  await frame3.fill("[name='mytext3']",'Welcome Syra')

  //nested frame
  const childFrames = await frame3.childFrames()
  await childFrames[0].locator("//*[@id='i8']/div[3]/div").check()
  await childFrames[0].locator("//*[@id='i19']/div[2]").check()


  await page.waitForTimeout(5000)
});