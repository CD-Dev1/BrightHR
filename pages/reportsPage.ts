import { expect } from '@playwright/test'
import { Base } from './basePage'

export class ReportsPage extends Base {
  async validatePage() {
    const headerText = this.page.getByRole('heading', {
      name: 'Reports',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
