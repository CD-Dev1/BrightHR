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
    await this.page.waitForLoadState('networkidle')
    await expect(this.page.url()).toBe(url)
  }

  async selectNotifications() {
    await this.page.getByRole('button', { name: 'notifications' }).click()
  }
  async selectHome() {
    await this.page
      .getByTestId('sideBar')
      .getByRole('link', { name: 'Home' })
      .click()
  }
  async selectRotas() {
    await this.page.getByRole('link', { name: 'Rotas' }).click()
  }
  async selectEmployees() {
    await this.page
      .getByTestId('sideBar')
      .getByRole('link', { name: 'Employees' })
      .click()
  }
  async selectResources() {
    await this.page.getByRole('link', { name: 'Resources' }).click()
  }
  async selectReports() {
    await this.page
      .getByTestId('sideBar')
      .getByRole('link', { name: 'Reports' })
      .click()
  }
  async selectUpgrade() {
    await this.page
      .getByTestId('sideBar')
      .getByRole('link', { name: 'Upgrade' })
      .click()
  }
  async selectAllProducts() {
    await this.page.getByTestId('productsButton').click()
  }
}
