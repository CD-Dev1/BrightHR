import { Base } from '../pages/basePage'
import { HomePage } from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { EmployeePage } from '../pages/employeesPage'
import { ReportsPage } from '../pages/reportsPage'
import { ResourcesPage } from '../pages/resourcesPage'
import { RotasPage } from '../pages/rotasPage'
import { upgradePage } from '../pages/upgradepage'

import { test as baseTest } from '@playwright/test'

const test = baseTest.extend<{
  basepage: Base
  homepage: HomePage
  loginpage: LoginPage
  dashboardpage: DashboardPage
  employeepage: EmployeePage
  reportspage: ReportsPage
  resourcespage: ResourcesPage
  rotaspage: RotasPage
  upgradepage: upgradePage
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
  dashboardpage: async ({ page }, use) => {
    await use(new DashboardPage(page))
  },
  employeepage: async ({ page }, use) => {
    await use(new EmployeePage(page))
  },
  reportspage: async ({ page }, use) => {
    await use(new ReportsPage(page))
  },
  resourcespage: async ({ page }, use) => {
    await use(new ResourcesPage(page))
  },
  rotaspage: async ({ page }, use) => {
    await use(new RotasPage(page))
  },
  upgradepage: async ({ page }, use) => {
    await use(new upgradePage(page))
  },
})

export default test
