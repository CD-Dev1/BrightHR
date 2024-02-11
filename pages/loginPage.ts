import { Base } from './basePage'

export class LoginPage extends Base {
  emailInput = this.page.locator('#email')
  passwordInput = this.page.locator('#password')

  async enterEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async selectLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click()
  }
}
