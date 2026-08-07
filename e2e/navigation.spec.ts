import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
    test('should navigate to the Projects page', async ({ page }) => {
        await page.goto('/');

        if ((page.viewportSize()?.width ?? 1280) < 768) {
            await page.getByRole('button', { name: 'Open navigation' }).click();
            await page.locator('#mobile-navigation').getByRole('link', { name: 'Work' }).click();
        } else {
            await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Work' }).click();
        }

        // Assert url is /projects
        await expect(page).toHaveURL(/.*\/projects/);
    });
});
