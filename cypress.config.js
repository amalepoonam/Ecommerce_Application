const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    amazonUrl:"https://www.amazon.in",
    flipcartUrl:"https://www.flipkart.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
