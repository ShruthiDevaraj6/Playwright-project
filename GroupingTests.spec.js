import { test, expect } from '@playwright/test';
import exp from 'constants';

test.beforeAll(async()=>{
    console.log('this is beforeAll hook')
})

test.afterAll(async()=>{
    console.log('this is afterAll hook')
})

test.beforeEach(async()=>{
    console.log('this is beforeEach hook')
})

test.afterEach(async()=>{
    console.log('this is afterEach hook')
})

test.describe('Group 1', ()=>{
    test('Test1', async ({ page }) => {
        console.log('this is test1')
      })
      
      test('Test2', async ({ page }) => {
        console.log('this is test2')
      })
})

test.describe('Group 2', ()=>{
    test('Test3', async ({ page }) => {
        console.log('this is test3')
      })
      
      test('Test4', async ({ page }) => {
        console.log('this is test4')
      })
})




