import { expect, test } from '@playwright/test';

const video = {
	title: 'Trata de arrancarlo',
	description: 'Por dios que alguien me ayude',
	duration: '00:04:00',
	twitchUrl: 'https://twitch.tv/?vod',
	thumbnail: '/trata_de_arrancarlo.jpg'
};

test('index page loads', async ({ page }) => {
	page.route('/videos', (route) => {
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify({ videos: [video] })
		});
	});
	await page.goto('/');
	await expect(page.locator('body').first()).toHaveText(/Cómo funciona/);

	const locatorThumbnail = page.locator('a', { hasText: 'Trata de arrancarlo' }).first();
	await expect(locatorThumbnail).toHaveAttribute('href', 'https://twitch.tv/?vod');
	const imgLocator = locatorThumbnail.locator('img');
	await expect(imgLocator).toHaveAttribute('src', /trata_de_arrancarlo.jpg/);
});

test('fallback when no video', async ({ page }) => {
	page.route('/videos', (route) => {
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify({ videos: [] })
		});
	});
	await page.goto('/');
	await expect(page.locator('body').first()).toHaveText(/Cómo funciona/);
	await expect(page.locator('body').first()).toHaveText(
		/No tenemos contenido disponible para suscriptores/
	);
});

test('fallback when videos endpoint fails', async ({ page }) => {
	page.route('/videos', (route) => {
		route.fulfill({
			status: 500,
			body: 'SERVER ERROR'
		});
	});
	await page.goto('/');
	await expect(page.locator('body').first()).toHaveText(/Cómo funciona/);
	await expect(page.locator('body').first()).toHaveText(
		/No tenemos contenido disponible para suscriptores/
	);
});
