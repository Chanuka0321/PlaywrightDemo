import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
  
    // Wait for actual URL (based on real redirect path)
    await page.waitForURL('**/dashboard/**', { waitUntil: 'networkidle', timeout: 15000 });
  
    const currentUrl = page.url();
    const title = await page.title();
  
    console.log('Current URL:', currentUrl);
    console.log('Page Title:', title);
  
    await page.screenshot({ path: 'homepage.png' });
  
    expect(title).toContain('OrangeHRM');
  });
