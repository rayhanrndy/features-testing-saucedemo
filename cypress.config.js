const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",   // Folder output
    overwrite: false,
    html: false,                          // Jangan generate HTML langsung dari setiap file
    json: true
  },
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
  video: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
});
