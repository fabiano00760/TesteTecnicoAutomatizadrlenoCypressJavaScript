const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  video: true, // grava vídeo ao rodar em modo headless
  screenshotOnRunFailure: false, // tira screenshot automático ao falhar
  videosFolder: "cypress/reports/videos",
  screenshotsFolder: "cypress/reports/screenshots",
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://www.saucedemo.com",

    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

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