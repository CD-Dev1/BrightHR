import test from '../fixtures/pageFixtures'

test('Login to Account @smoke', async ({ homePage, loginPage }) => {
  await homePage.navigateTo('/')
  await loginPage.enterEmail(process.env.ACC_EMAIL!)
  await loginPage.enterPassword(process.env.ACC_PASSWORD!)
  await loginPage.selectLogin()
  await homePage.validateURL('https://sandbox-app.brighthr.com/dashboard')
})
