'use strict';
const execa = require('execa');

const mode = process.argv[2];

execa('json-server', ['server/rest.json', '--middleware=server/middlewares.js'])
  .catch(({ message }) => {
    console.error(message);
    process.exit(1);
  });

execa('cypress', [mode, '--config-file=cypress/cypress.json'], { stdio: 'inherit' })
  .then(() => process.exit())
  .catch(() => process.exit(1));
