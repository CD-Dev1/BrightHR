import { expect, Page } from '@playwright/test'
import { Base } from './basePage'

export class UpgradePage extends Base {
  async validatePage() {
    const headerText = await this.page.getByRole('heading', {
      name: "Upgrade to BrightHR's award-winning software",
    })
    await expect(headerText).toBeVisible()
  }
}
