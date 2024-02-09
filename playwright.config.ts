import { defineConfig, devices } from '@playwright/test'

require('dotenv').config({ path: '.env.local' })

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      'playwright-tesults-reporter',
      { 'tesults-target': process.env.TESULTS_API_KEY },
    ],
    ['html'],
  ],

  use: {
    baseURL: 'https://sandbox-app.brighthr.com/lite',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
})
