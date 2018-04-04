describe('Test', () => {
  it('exists', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('img', 1)
      .end()
  })
})
