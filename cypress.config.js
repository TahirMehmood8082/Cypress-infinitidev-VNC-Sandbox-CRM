const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 2000000,
  defaultCommandTimeout: 123459,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
