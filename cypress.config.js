const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testautomationpractice.blogspot.com/",
    setupNodeEvents(on, config) { },
  },
  screenshotsFolder: "cypress/screenshots",
  video: true,
});