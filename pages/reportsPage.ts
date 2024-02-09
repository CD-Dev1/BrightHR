import { expect, Page } from '@playwright/test'
import { Base } from './basePage'

export class ReportsPage extends Base {
  async validatePage() {
    const headerText = await this.page.getByRole('heading', {
      name: 'Reports',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
