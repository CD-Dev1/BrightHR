import { expect } from '@playwright/test'
import { Base } from './basePage'

export class RotasPage extends Base {
  async validatePage() {
    const headerText = this.page.getByRole('heading', {
      name: 'Rota & shifts',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
