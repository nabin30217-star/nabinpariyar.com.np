import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
    test('should show validation errors when submitted empty', async ({ page }) => {
        await page.goto('/contact');

        const submitButton = page.getByRole('button', { name: /send project brief/i });
        await submitButton.click();

        await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
        await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
        await expect(page.getByText('Message must be at least 10 characters.')).toBeVisible();
    });

    test('shows a useful fallback when the submission provider is unavailable', async ({ page }) => {
        await page.goto('/contact');
        await page.getByLabel('Name').fill('QA Reviewer');
        await page.getByLabel('Email').fill('reviewer@example.com');
        await page.getByLabel('Problem, constraint, and current state').fill('This is a valid test brief for the contact failure state.');
        await page.getByRole('button', { name: /send project brief/i }).click();

        await expect(page.getByText(
            'The form is temporarily unavailable. Please email nabin30217@gmail.com directly.',
            { exact: true },
        )).toBeVisible();
    });
});
