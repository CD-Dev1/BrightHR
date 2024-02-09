import { expect } from '@playwright/test'
import test from '../fixtures/pageFixtures'

test('Validate Navigation of App @smoke', async ({
  page,
  homepage,
  loginpage,
  dashboardpage,
  rotaspage,
  employeepage,
  reportspage,
  resourcespage,
  upgradepage,
}) => {
  await homepage.navigateTo('/')
  await loginpage.enterEmail(process.env.ACC_EMAIL!)
  await loginpage.enterPassword(process.env.ACC_PASSWORD!)
  await loginpage.selectLogin()
  await dashboardpage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardpage.validatePage()
  await dashboardpage.selectRotas()
  await rotaspage.validateURL('https://sandbox-app.brighthr.com/rota-planner')
  await rotaspage.validatePage()
  await dashboardpage.selectEmployees()
  await employeepage.validateURL(
    'https://sandbox-app.brighthr.com/employee-hub'
  )
  await employeepage.validatePage()
  await dashboardpage.selectResources()
  await resourcespage.validateURL('https://sandbox-app.brighthr.com/resources')
  await resourcespage.validatePage()
  await dashboardpage.selectReports()
  await reportspage.validateURL('https://sandbox-app.brighthr.com/reports')

  await reportspage.validatePage()
  await dashboardpage.selectUpgrade()
  await upgradepage.validateURL('https://sandbox-app.brighthr.com/upgrade')
  await upgradepage.validatePage()
})
