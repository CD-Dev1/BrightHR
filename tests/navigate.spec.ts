import test from '../fixtures/pageFixtures'

test('Validate Navigation of App @smoke', async ({
  homePage,
  loginPage,
  dashboardPage,
  rotasPage,
  employeePage,
  reportsPage,
  resourcesPage,
  upgradePage,
}) => {
  await homePage.navigateTo('/')
  await loginPage.enterEmail(process.env.ACC_EMAIL!)
  await loginPage.enterPassword(process.env.ACC_PASSWORD!)
  await loginPage.selectLogin()
  await dashboardPage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardPage.validatePage()
  await dashboardPage.selectRotas()
  await rotasPage.validateURL('https://sandbox-app.brighthr.com/rota-planner')
  await rotasPage.validatePage()
  await dashboardPage.selectEmployees()
  await employeePage.validateURL(
    'https://sandbox-app.brighthr.com/employee-hub'
  )
  await employeePage.validatePage()
  await dashboardPage.selectResources()
  await resourcesPage.validateURL('https://sandbox-app.brighthr.com/resources')
  await resourcesPage.validatePage()
  await dashboardPage.selectReports()
  await reportsPage.validateURL('https://sandbox-app.brighthr.com/reports')

  await reportsPage.validatePage()
  await dashboardPage.selectUpgrade()
  await upgradePage.validateURL('https://sandbox-app.brighthr.com/upgrade')
  await upgradePage.validatePage()
})
