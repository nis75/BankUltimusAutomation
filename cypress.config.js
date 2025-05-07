const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Specify the reporter
  e2e: {
    setupNodeEvents(on, config) {
      // Register the reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for saving reports
      overwrite: false,             // Prevent overwriting reports
      html: true,                   // Generate an HTML report
      json: true,                   // Generate a JSON report
      charts: true,                 // Include charts in the report
    },
    video: true,                    // Capture video of test runs
    screenshotsFolder: "cypress/screenshots", // Screenshot folder
    videosFolder: "cypress/videos",           // Video folder
  },
});
