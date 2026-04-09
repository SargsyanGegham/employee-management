import test, { expect } from "playwright/test";

test('user can login', async ({ page }) => {
  // Slow down to see what's happening
  await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle' });
  
  await page.fill('input[name="email"]', 'admin@test.com');
  await page.fill('input[name="password"]', '123456');
  
  // Check if form has any validation errors
  await page.click('button[type="submit"]');
  
  // Wait a moment to see if error appears
  await page.waitForTimeout(2000);
  
  // Check for error messages
  const errorElement = await page.locator('.error-message, .alert, .text-red-500').first();
  if (await errorElement.isVisible()) {
    console.log('Error message:', await errorElement.textContent());
  }
  
  await expect(page).toHaveURL(/.*\/dashboard\/.*/);
});


// config-cloude.js 


// index.ts  export project-1 = xxxxx.ts
// index.ts  export project-2 = xxxxx-v1.ts
// index.ts  export project-3 = xxxxx-v2.ts