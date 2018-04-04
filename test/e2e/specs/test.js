describe('Test', () => {
  it('exists', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Hello from your awesome Vue.js project!')
      .assert.elementCount('img', 1)
      .end()
  })
})
