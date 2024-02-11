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
})

test('Add employees to App', async ({ dashboardPage, employeePage }) => {
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
  await employeePage.validateSuccessModal(employees[0].firstName)
  await employeePage.addAnotherEmployee()
  await employeePage.enterEmployeeDetails(
    employees[1].firstName,
    employees[1].lastName,
    employees[1].email,
    employees[1].phoneNumber,
    employees[1].jobTitle
  )
  await employeePage.validateSuccessModal(employees[1].firstName)
  await employeePage.goToRotas()
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.validateNewEmployeeDisplayed(
    employees[0].firstName,
    employees[0].lastName
  )
  await employeePage.validateNewEmployeeDisplayed(
    employees[1].firstName,
    employees[1].lastName
  )
})

test('Validate List of employees', async ({ dashboardPage, employeePage }) => {
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.validateNewEmployeeDisplayed(
    employees[0].firstName,
    employees[0].lastName
  )
})
