import test from '../fixtures/pageFixtures'

test('Login to Account', async ({ homepage, loginpage }) => {
  await homepage.navigateTo('/')
  await loginpage.enterEmail(process.env.ACC_EMAIL!)
  await loginpage.enterPassword(process.env.ACC_PASSWORD!)
  await loginpage.selectLogin()
  await homepage.validateURL('https://sandbox-app.brighthr.com/dashboard')
})
