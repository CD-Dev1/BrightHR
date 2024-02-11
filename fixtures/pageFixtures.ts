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

const pages = {
  basePage: Base,
  homePage: HomePage,
  loginPage: LoginPage,
  dashboardPage: DashboardPage,
  employeePage: EmployeePage,
  reportsPage: ReportsPage,
  resourcesPage: ResourcesPage,
  rotasPage: RotasPage,
  upgradePage: UpgradePage,
}

const test = baseTest.extend(
  Object.entries(pages).reduce((acc, [name, Page]) => {
    acc[name] = async ({ page }, use) => {
      await use(new Page(page))
    }
    return acc
  }, {})
)

export default test
