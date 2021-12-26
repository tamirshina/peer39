import { test, expect } from '@playwright/test'

test('should navigate to a episode page', async ({ page }) => {
    // Start from the index page Breaking bad 
    await page.goto('http://localhost:3000/')
    // Find an element with the text 'Air Date' and click on it
    await page.click('text=Air Date')
    // The new url should be "/episodes/1"
    await expect(page).toHaveURL('http://localhost:3000/episodes/1')
    await expect(page.locator('h2')).toContainText("Pilot")
})

test('should navigate to a character page', async ({ page }) => {

    await page.goto('http://localhost:3000/episodes/1')
    await page.click('text=Walter White')
    await expect(page).toHaveURL('http://localhost:3000/characters/Walter+White')
    await expect(page.locator('h2')).toContainText("Walter White")
})

test('should navigate to Skyler page', async ({ page }) => {

    await page.goto('http://localhost:3000/episodes/5')
    await page.click('text=Skyler White')
    await expect(page.locator('.Home_characterData__XET_1')).toHaveCSS('display', 'flex');
})
