import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Frames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  //finding total number of frames on the page
  const allFrames = await page.frames()
  console.log("Number of frames:",allFrames.length)

  const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})//right click on frmae 1 and copy link address from inspect
  await frame1.fill("[name='mytext1']",'Syra')

  await page.waitForTimeout(5000)
});