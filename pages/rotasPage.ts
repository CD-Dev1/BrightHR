import { expect, Page } from '@playwright/test'
import { Base } from './basePage'

export class RotasPage extends Base {
  async validatePage() {
    const headerText = await this.page.getByRole('heading', {
      name: 'Rota & shifts',
      exact: true,
    })
    await expect(headerText).toBeVisible()
  }
}
