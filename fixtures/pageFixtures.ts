import { Base } from '../pages/basePage'
import { HomePage } from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { EmployeePage } from '../pages/employeesPage'
import { ReportsPage } from '../pages/reportsPage'
import { ResourcesPage } from '../pages/resourcesPage'
import { RotasPage } from '../pages/rotasPage'
import { UpgradePage } from '../pages/upgradePage'

import { test as baseTest } from '@playwright/test'

const test = baseTest.extend<{
  basePage: Base
  homePage: HomePage
  loginPage: LoginPage
  dashboardPage: DashboardPage
  employeePage: EmployeePage
  reportsPage: ReportsPage
  resourcesPage: ResourcesPage
  rotasPage: RotasPage
  upgradePage: UpgradePage
}>({
  basePage: async ({ page }, use) => {
    await use(new Base(page))
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page))
  },
  employeePage: async ({ page }, use) => {
    await use(new EmployeePage(page))
  },
  reportsPage: async ({ page }, use) => {
    await use(new ReportsPage(page))
  },
  resourcesPage: async ({ page }, use) => {
    await use(new ResourcesPage(page))
  },
  rotasPage: async ({ page }, use) => {
    await use(new RotasPage(page))
  },
  upgradePage: async ({ page }, use) => {
    await use(new UpgradePage(page))
  },
})

export default test
