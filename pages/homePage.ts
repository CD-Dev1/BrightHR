import { Base } from './basePage'

export class HomePage extends Base {
  signUpBtn = this.page.getByRole('link', { name: 'Log in' })
  logInBtn = this.page.getByRole('link', { name: 'Sign up' })

  async selectSignUp() {
    await this.signUpBtn.click()
  }

  async selectLogin() {
    await this.logInBtn.click()
  }
}
