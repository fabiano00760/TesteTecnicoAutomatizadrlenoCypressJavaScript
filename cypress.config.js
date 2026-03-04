const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://www.saucedemo.com",
    async setupNodeEvents(on, config) {
      // 1. AQUI ESTAVA O ERRO! O nome correto é "addCucumberPreprocessorPlugin"
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // 2. Configura o esbuild para traduzir o Gherkin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});