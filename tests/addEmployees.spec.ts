import test from '../fixtures/pageFixtures'
import { employees } from '../data/sampleEmployees.json'

test.beforeEach(async ({ homePage, loginPage }) => {
  await homePage.navigateTo('/')
  await loginPage.enterEmail(process.env.ACC_EMAIL!)
  await loginPage.enterPassword(process.env.ACC_PASSWORD!)
  await loginPage.selectLogin()
  await homePage.validateURL('https://sandbox-app.brighthr.com/dashboard')
})

test('Validation of Add Employee Form', async ({
  page,
  dashboardPage,
  employeePage,
}) => {
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.selectAddEmployee()

  await employeePage.enterInvalidEmployeeDetails(
    employees[0].firstName,
    employees[0].lastName,
    employees[0].email,
    employees[0].phoneNumber,
    employees[0].jobTitle
  )
  await page.waitForTimeout(5000)
})

test('Add employees to App', async ({
  page,

  dashboardPage,
  employeePage,
}) => {
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.selectAddEmployee()
  await employeePage.enterEmployeeDetails(
    employees[0].firstName,
    employees[0].lastName,
    employees[0].email,
    employees[0].phoneNumber,
    employees[0].jobTitle
  )
  await page.waitForTimeout(5000)
})

test('Validate List of employees', async ({
  page,
  homePage,
  loginPage,
  dashboardPage,
  employeePage,
}) => {
  await homePage.navigateTo('/')
  await loginPage.enterEmail(process.env.ACC_EMAIL!)
  await loginPage.enterPassword(process.env.ACC_PASSWORD!)
  await loginPage.selectLogin()
  await homePage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.validateNewEmployeeDisplayed(
    employees[0].firstName,
    employees[0].lastName
  )

  await page.waitForTimeout(5000)
})
