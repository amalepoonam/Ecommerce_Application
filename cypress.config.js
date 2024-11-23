const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  chromeWebSecurity:false,
  structiveThirdPartyCode:true,

  
  reporter: 'cypress-mochawesome-reporter',

  env:{
    amazonUrl:"https://www.amazon.in",
    flipcartUrl:"https://www.flipkart.com"
  },
  e2e: {
    // pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
 