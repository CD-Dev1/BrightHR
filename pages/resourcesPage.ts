import { expect } from '@playwright/test'
import { Base } from './basePage'

export class ResourcesPage extends Base {
  async validatePage() {
    const headerText = this.page.getByRole('heading', {
      name: 'Resource centre',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
