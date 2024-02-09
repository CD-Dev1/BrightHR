import { expect, Page } from '@playwright/test'
import { Base } from './basePage'

export class DashboardPage extends Base {
  async validatePage() {
    const headerText = await this.page.getByRole('heading', {
      name: 'Hi, Chris',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
