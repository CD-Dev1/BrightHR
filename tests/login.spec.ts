import { expect } from '@playwright/test'
import test from '../fixtures/pageFixtures'

test('Login to Account', async ({ page, homepage, loginpage }) => {
  await homepage.navigateTo('/')
  //await homepage.selectLogin()
  await loginpage.enterEmail('test@123.com')
  await page.waitForTimeout(4000)
})
