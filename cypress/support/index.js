Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false,
});

// https://github.com/cypress-io/cypress/issues/95
Cypress.on('window:before:load', win => {
  delete win.fetch;
});