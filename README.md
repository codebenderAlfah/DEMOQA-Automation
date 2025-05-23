# DEMOQA-Automation

This project contains Playwright tests for automating interactions with demoqa.com.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url> # Replace <repository_url> with the actual URL
   cd DEMOQA-Automation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers (if not already installed by `npm install`):
    ```bash
    npx playwright install
    ```

## Running Tests

To run all tests:
```bash
npx playwright test
```

To run tests on a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

To view the HTML report after a test run:
```bash
npx playwright show-report
```