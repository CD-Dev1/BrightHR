import { Base } from '../pages/basePage'
import { HomePage } from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import { test as baseTest } from '@playwright/test'

const test = baseTest.extend<{
  basepage: Base
  homepage: HomePage
  loginpage: LoginPage
}>({
  basepage: async ({ page }, use) => {
    await use(new Base(page))
  },
  homepage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
})

export default test
