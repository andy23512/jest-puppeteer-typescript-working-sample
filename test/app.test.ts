describe('app', () => {
  beforeEach(async () => {
    await page.goto('https://google.com');
  });

  it('should display a google text', async () => {
    await expect(page).toMatch('google');
  });
});
