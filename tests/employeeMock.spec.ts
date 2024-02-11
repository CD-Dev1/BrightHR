import test from '../fixtures/pageFixtures'
import fs from 'fs/promises'

test('Validate List of mocked employees @smoke', async ({
  page,
  homePage,
  loginPage,
  dashboardPage,
  employeePage,
}) => {
  const mockData = await fs.readFile('data/mockEmployees.json', 'utf-8')
  const parsedMockData = JSON.parse(mockData)
  await homePage.navigateTo('/')
  await loginPage.enterEmail(process.env.ACC_EMAIL!)
  await loginPage.enterPassword(process.env.ACC_PASSWORD!)
  await loginPage.selectLogin()
  await homePage.validateURL('https://sandbox-app.brighthr.com/dashboard')
  await page.route(
    'https://sandbox-api.brighthr.com/v1/employee?includeTerminated=true',
    async (route) => {
      await route.fulfill({ body: mockData })
    }
  )
  await dashboardPage.selectEmployees()
  await employeePage.validatePage()
  await employeePage.validateNewEmployeeDisplayed(
    parsedMockData[0].firstName,
    parsedMockData[0].lastName
  )

  await page.waitForTimeout(5000)
})
