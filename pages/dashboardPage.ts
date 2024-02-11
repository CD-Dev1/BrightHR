import { expect } from '@playwright/test'
import { Base } from './basePage'

export class DashboardPage extends Base {
  async validatePage() {
    const headerText = this.page.getByRole('heading', {
      name: 'Hi, Chris',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
