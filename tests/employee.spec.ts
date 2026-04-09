import test from "playwright/test";

test('user can add/edit/delete employee', async ({ page }) => {
  // Slow down to see what's happening
  await page.goto('http://localhost:3000/dashboard/employees', { waitUntil: 'networkidle' });
  
  // Check if form has any validation errors
  await page.click('button[name="add-employe"]');
  
  await page.fill('input[name="name"]', 'test');
  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="position"]', 'QA');
  
    // Check if form has any validation errors
  await page.click('button[type="submit"]');
  
  // Wait a moment to see if error appears
  await page.waitForTimeout(2000);
  
  // Check for error messages
  const errorElement = await page.locator('.error-message, .alert, .text-red-500').first();
  if (await errorElement.isVisible()) {
    console.log('Error message:', await errorElement.textContent());
  }
  });