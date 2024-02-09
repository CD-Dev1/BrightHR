import test from '../fixtures/pageFixtures'
import { DashboardPage } from '../pages/dashboardPage'
import { employees } from '../data/sampleemployees.json'

test('Validation of Add Employee Form', async ({
  page,
  homepage,
  loginpage,
  dashboardpage,
  employeepage,
}) => {
  await homepage.navigateTo('/')
  await loginpage.enterEmail(process.env.ACC_EMAIL!)
  await loginpage.enterPassword(process.env.ACC_PASSWORD!)
  await loginpage.selectLogin()
  await homepage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardpage.selectEmployees()
  await employeepage.validatePage()
  await employeepage.selectAddEmployee()

  await employeepage.enterInvalidEmployeeDetails(
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
  homepage,
  loginpage,
  dashboardpage,
  employeepage,
}) => {
  await homepage.navigateTo('/')
  await loginpage.enterEmail(process.env.ACC_EMAIL!)
  await loginpage.enterPassword(process.env.ACC_PASSWORD!)
  await loginpage.selectLogin()
  await homepage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardpage.selectEmployees()
  await employeepage.validatePage()
  await employeepage.selectAddEmployee()
  await employeepage.enterEmployeeDetails(
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
  homepage,
  loginpage,
  dashboardpage,
  employeepage,
}) => {
  await homepage.navigateTo('/')
  await loginpage.enterEmail(process.env.ACC_EMAIL!)
  await loginpage.enterPassword(process.env.ACC_PASSWORD!)
  await loginpage.selectLogin()
  await homepage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await dashboardpage.selectEmployees()
  await employeepage.validatePage()
  await employeepage.validateNewEmployeeDisplayed(
    employees[0].firstName,
    employees[0].lastName
  )

  await page.waitForTimeout(5000)
})
