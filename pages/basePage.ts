import { expect, Page } from '@playwright/test'

export class Base {
  page: Page
  constructor(page: Page) {
    this.page = page
  }

  async navigateTo(url: string) {
    await this.page.goto(url)
  }

  async validateURL(url: string) {
    await expect(this.page.url()).toBe(url)
  }
}
