import { test, expect } from '@playwright/test';

test.describe('Welcome Page', () => {
  test('should load welcome page with Japanese content', async ({ page }) => {
    // Navigate to the welcome page
    await page.goto('/welcome');

    // Check that the page loaded correctly
    await expect(page).toHaveTitle('ようこそ - スプーキーズ見習いのブログ');

    // Verify main heading is present
    await expect(page.getByRole('heading', { name: 'ようこそ', level: 1 })).toBeVisible();

    // Verify site introduction text is present
    await expect(page.getByText('スプーキーズ見習いのブログへようこそ！')).toBeVisible();

    // Verify description about the blog
    await expect(page.getByText('このブログでは、ソフトウェア開発、プログラミング、技術に関する話題を中心に')).toBeVisible();

    // Verify technology stack information
    await expect(page.getByText('React、TypeScript、Java、Kotlin、Spring Boot、AWS など')).toBeVisible();

    // Verify usage instructions section
    await expect(page.getByRole('heading', { name: 'サイトの使い方', level: 2 })).toBeVisible();

    // Verify recent topics section
    await expect(page.getByRole('heading', { name: '最近の話題', level: 2 })).toBeVisible();
  });

  test('should navigate to article list from inline link', async ({ page }) => {
    await page.goto('/welcome');

    // Click the inline link in the usage instructions
    await page.getByRole('link', { name: 'こちら' }).click();

    // Should navigate to the first page of articles
    await expect(page).toHaveURL('/pages/1');
    await expect(page).toHaveTitle('スプーキーズ見習いのブログ');
    await expect(page.getByRole('heading', { name: '投稿記事', level: 2 })).toBeVisible();
  });

  test('should navigate to article list from main button', async ({ page }) => {
    await page.goto('/welcome');

    // Click the main call-to-action button
    await page.getByRole('button', { name: '記事一覧を見る' }).click();

    // Should navigate to the first page of articles
    await expect(page).toHaveURL('/pages/1');
    await expect(page).toHaveTitle('スプーキーズ見習いのブログ');
    await expect(page.getByRole('heading', { name: '投稿記事', level: 2 })).toBeVisible();
  });

  test('should have proper meta description for SEO', async ({ page }) => {
    await page.goto('/welcome');

    // Check that the meta description is set correctly
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('スプーキーズ見習いのブログへようこそ');
    expect(metaDescription).toContain('ソフトウェア開発や技術に関する記事を投稿しています');
  });

  test('should take a screenshot of the welcome page', async ({ page }) => {
    await page.goto('/welcome');

    // Wait for the page to be fully loaded
    await expect(page.getByRole('heading', { name: 'ようこそ', level: 1 })).toBeVisible();

    // Take a screenshot
    await page.screenshot({ 
      path: 'welcome-page-test-screenshot.png',
      fullPage: true 
    });
  });
});