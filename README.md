# tillid-website
Tillid website

## Testing

This website includes comprehensive automated testing using Playwright to ensure the site functions correctly.

### Running Tests Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps chromium
   ```

3. Run tests:
   ```bash
   npm test
   ```

### Test Coverage

The test suite covers:
- Page structure and HTML validity
- Navigation functionality
- Form validation and submission
- Responsive design across different screen sizes
- Content presence and visibility
- Interactive elements (buttons, links, hover effects)
- Accessibility features (meta tags, proper IDs)

### CI/CD

Tests run automatically on:
- Push to main branch
- Push to any copilot/* branches  
- Pull requests to main branch

Test reports are available as artifacts in GitHub Actions workflow runs.

### Test Configuration

- **Framework**: Playwright Test
- **Browsers Tested**: Chromium, Firefox, WebKit, Mobile Chrome
- **Test Location**: `tests/website.spec.js`
- **Configuration**: `playwright.config.js`

