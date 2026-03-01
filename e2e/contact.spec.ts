import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
    test('should show validation errors when submitted empty', async ({ page }) => {
        await page.goto('/contact');

        const submitButton = page.getByRole('button', { name: /send message/i });
        await submitButton.click();

        await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
        await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
        await expect(page.getByText('Message must be at least 10 characters.')).toBeVisible();
    });
});
