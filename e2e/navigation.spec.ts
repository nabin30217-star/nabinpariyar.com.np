import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
    test('should navigate to the Projects page', async ({ page }) => {
        await page.goto('/');

        // Find the Projects link in the navbar
        const projectsLink = page.getByRole('link', { name: 'Projects' }).first();
        await projectsLink.click();

        // Assert url is /projects
        await expect(page).toHaveURL(/.*\/projects/);
    });
});
