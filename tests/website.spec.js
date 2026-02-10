import { test, expect } from '@playwright/test';

test.describe('Tillid Tech Website', () => {
  test.beforeEach(async ({ page }) => {
    const filePath = 'file://' + process.cwd() + '/index.html';
    await page.goto(filePath);
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Tillid Tech - Consulting Excellence/);
  });

  test('displays header with logo and navigation', async ({ page }) => {
    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check logo/company name
    await expect(page.locator('header h1')).toContainText('Tillid Tech');

    // Check navigation links
    await expect(page.locator('nav a[href="#services"]')).toBeVisible();
    await expect(page.locator('nav a[href="#about"]')).toBeVisible();
    await expect(page.locator('nav a[href="#contact"]')).toBeVisible();
  });

  test('displays hero section with correct content', async ({ page }) => {
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('h2')).toContainText('Consulting Excellence');
    await expect(hero.locator('p')).toContainText('Transforming businesses through innovative technology solutions');
    await expect(hero.locator('a.btn')).toContainText('Get Started');
  });

  test('displays all three service cards', async ({ page }) => {
    const serviceCards = page.locator('.service-card');
    await expect(serviceCards).toHaveCount(3);

    // Check service titles
    await expect(page.getByRole('heading', { name: 'Strategic Consulting' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Software Development' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Digital Transformation' })).toBeVisible();
  });

  test('displays about section', async ({ page }) => {
    const about = page.locator('#about');
    await expect(about).toBeVisible();
    await expect(about.locator('h2')).toContainText('About Tillid Tech');
    await expect(about.locator('p').first()).toContainText('experienced technology consultants');
  });

  test('displays contact form with all fields', async ({ page }) => {
    const form = page.locator('#contact form');
    await expect(form).toBeVisible();

    // Check all form fields exist
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('displays footer with copyright', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('p')).toContainText('© 2024 Tillid Tech. All rights reserved.');
  });

  test('navigation links scroll to correct sections', async ({ page }) => {
    // Click services link
    await page.click('nav a[href="#services"]');
    await page.waitForTimeout(500);
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeInViewport();

    // Click about link
    await page.click('nav a[href="#about"]');
    await page.waitForTimeout(500);
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();

    // Click contact link
    await page.click('nav a[href="#contact"]');
    await page.waitForTimeout(500);
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('hero CTA button links to contact section', async ({ page }) => {
    await page.click('.hero a.btn');
    await page.waitForTimeout(500);
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('form has required field validation', async ({ page }) => {
    // Scroll to contact form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Check that name field is required
    const nameInput = page.locator('#name');
    const isNameInvalid = await nameInput.evaluate((el) => !el.validity.valid);
    expect(isNameInvalid).toBeTruthy();
  });

  test('form accepts valid input', async ({ page }) => {
    // Scroll to contact form
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Fill in the form
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#company', 'Acme Corp');
    await page.fill('#message', 'I would like to discuss a project.');

    // Set up dialog handler before submitting
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Thank you for your message');
      await dialog.accept();
    });

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait a bit for the alert to be handled
    await page.waitForTimeout(500);
  });

  test('service cards have hover effects', async ({ page }) => {
    const firstCard = page.locator('.service-card').first();
    
    // Get initial box shadow
    const initialBoxShadow = await firstCard.evaluate((el) => {
      return window.getComputedStyle(el).boxShadow;
    });

    // Hover over card
    await firstCard.hover();
    await page.waitForTimeout(100);

    // Get box shadow after hover
    const hoverBoxShadow = await firstCard.evaluate((el) => {
      return window.getComputedStyle(el).boxShadow;
    });

    // Box shadow should change on hover (indicating transition worked)
    expect(initialBoxShadow).not.toBe(hoverBoxShadow);
  });

  test('page has proper meta tags', async ({ page }) => {
    // Check charset
    const charset = await page.locator('meta[charset]').getAttribute('charset');
    expect(charset).toBe('UTF-8');

    // Check viewport
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
  });

  test('all sections have proper IDs for navigation', async ({ page }) => {
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('responsive layout - mobile view', async ({ page, viewport }) => {
    if (viewport?.width && viewport.width < 768) {
      // On mobile, check that header stacks vertically
      const headerContainer = page.locator('header .container');
      const flexDirection = await headerContainer.evaluate((el) => {
        return window.getComputedStyle(el).flexDirection;
      });
      expect(flexDirection).toBe('column');
    }
  });
});
