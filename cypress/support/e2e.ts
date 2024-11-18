// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands_webapp'
import './commands_admin'
import './Oauth'
import './commands_personalsetting'


import 'cypress-file-upload'
import 'cypress-fixture-faker'
import { faker } from '@faker-js/faker'
import { word } from 'minifaker'
import 'minifaker/locales/en'
require('cypress-xpath')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

// Alternatively you can use CommonJS syntax:
// require('./commands')