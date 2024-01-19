import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Drag and Drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  
  const sourceCop = await page.locator('#box4')
  const targetItaly = await page.locator('#box106')
    //Approach1
//   await sourceCop.hover()
//   await page.mouse.down()

//   await targetItaly.hover()
//   await page.mouse.up()

  //Aproach2
  await sourceCop.dragTo(targetItaly)
  
  await page.waitForTimeout(5000)
});