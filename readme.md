# Playwright UI Tests

This repository contains UI tests for Bright HR Interview, written using the Playwright testing framework using Typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository

```bash
git clone https://github.com/CD-Dev1/BrightHR.git
```

2. Install dependencies

```bash
npm install
```

2. To run the tests, use the following command:

```bash
npm run test:ui
```

This will run the tests that are tagged with @smoke. Due to the other tests adding data(employees) I have decided not to run these via CI/CD to prevent numerous records being added during development of the suite.

## CI / CD

There is a yml file that has been created that allows the tests to run on pushes and PRs to the main branch. There is also a manual trigger to allow the tests to run in the pipeline for any Ad-Hoc requirements
To try to reduce the pipeline run duration the Playwright install has been cached.

## Reporting

There are multiple reports generated when the tests are ran. A HTML report is created and stored as an artifact when the job is completed via CI/CD or stored in playwright-report folder for any local executions. The results are also uploaded to a 3rd party dashboard called Tesults which allows us to view historical data of all previous test runs.

## Misc

There are numerous other tests/config/tooling that can be added to this repo but due to time constraints they have not been added, additional improvements could include:

Accessibly tests via Axe/Playwright <br>
Visual Regression tests via Playwright or Percy <br>
Linting on Git commits ( Playwright specific linting packages) <br>
