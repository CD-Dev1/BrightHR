import { expect, Page } from '@playwright/test'
import { Base } from './basePage'

export class EmployeePage extends Base {
  async validatePage() {
    const headerText = await this.page.getByRole('heading', {
      name: 'Employee hub',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
