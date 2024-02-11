import { expect } from '@playwright/test'
import { Base } from './basePage'

export class EmployeePage extends Base {
  async validatePage() {
    const headerText = this.page.getByRole('heading', {
      name: 'Employee hub',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }

  async selectAddEmployee() {
    await this.page.getByRole('button', { name: 'Add employee' }).click()
  }

  async enterInvalidEmployeeDetails(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    jobTitle: string
  ) {
    const saveEmployeeBtn = this.page.getByRole('button', {
      name: 'Save new employee',
    })
    await expect(saveEmployeeBtn).toBeDisabled()
    await this.page.fill('#firstName', firstName)
    await expect(saveEmployeeBtn).toBeDisabled()
    await this.page.fill('#lastName', lastName)
    await expect(saveEmployeeBtn).toBeDisabled()
    await this.page.fill('#email', email)
    await expect(saveEmployeeBtn).toBeEnabled()
    await this.page.fill('#phoneNumber', phoneNumber)
    await this.page.getByTestId('input-selector').click()
    await this.page.getByText('22').click()
    await this.page.fill('#jobTitle', jobTitle)
    //await saveEmployeeBtn.click();
  }

  async enterEmployeeDetails(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    jobTitle: string
  ) {
    const saveEmployeeBtn = await this.page.getByRole('button', {
      name: 'Save new employee',
    })
    await this.page.fill('#firstName', firstName)
    await this.page.fill('#lastName', lastName)
    await this.page.fill('#email', email)
    await this.page.fill('#phoneNumber', phoneNumber)
    await this.page.getByTestId('input-selector').click()
    await this.page.getByText('22').click()
    await this.page.fill('#jobTitle', jobTitle)
    //await saveEmployeeBtn.click();
  }

  async validateSuccessModal(firstName: string, lastName: string) {
    const successMessage = this.page.getByRole('heading', {
      name: 'Success! New employee added',
      exact: true,
    })
    await expect(successMessage).toBeVisible()

    const employeeAddedHeader = this.page.getByText(
      firstName + ' added to BrightHR Lite'
    )
    await expect(employeeAddedHeader).toBeVisible()

    const employeeAddedInfo = this.page.getByRole('heading', {
      name: 'employee2 second',
      exact: true,
    })
    await expect(employeeAddedInfo).toBeVisible()
  }

  async addAnotherEmployee() {
    this.page.getByRole('button', {
      name: 'Add another employee',
      exact: true,
    })
  }

  async validateNewEmployeeDisplayed(firstName: string, lastName: string) {
    this.page.getByRole('heading', {
      name: firstName + ' ' + lastName,
      exact: true,
    })
  }
}
