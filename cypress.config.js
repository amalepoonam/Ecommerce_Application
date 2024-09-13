const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  
  reporter: 'cypress-mochawesome-reporter',

  env:{
    amazonUrl:"https://www.amazon.in",
    flipcartUrl:"https://www.flipkart.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
 