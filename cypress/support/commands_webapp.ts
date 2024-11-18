/// /<reference types="cypress" />
/// /<reference types="cypress-xpath" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
/// <reference types="cypress-xpath" />


import * as el from '../support/elements/otp-page-element'
import 'cypress-xpath';

 
const { faker:webappsfaker } = require('@faker-js/faker');
const recipient = { privyID: 'DEVDI4567' };
const recipient2 = { privyID: 'DEVDE6775' };


//clear cookies document list
Cypress.Commands.add('klirkuki', function(){
    //cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    cy.clearCookies({timeout: 60000})
    }
)
//clear cookies document list
Cypress.Commands.add('klirkukiDocView', function(){
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    cy.clearCookies({timeout: 60000})
    }
)

//switch enterprise
// Cypress.Commands.add('switchEnt', function(){ 
//     cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
//     cy.wait(1000).get("[data-e2eid='btn-switch-account'] > .btn").click({force:true})
//     cy.wait(2000).xpath("//button[.='PT Padang Pagi Sore']").should('have.text', 'PT Padang Pagi Sore').click()
    
//     //cy.xpath("//div[@class='flex items-center w-full space-x-1 overflow-hidden']").should('have.text', 'PT Padang Pagi Sore')
//     //cy.wait(2000).get("[data-e2eid='switch-to-enterprise-0']").click({force:true})
//     //cy.wait(5000).get("[data-e2eid='btn-switch-account'] > .btn").click({force:true})
//     // cy.wait(6000)
    
//     //cy.xpath("//button[.='PT Padang Pagi Sore']").click()
//     }
// )

Cypress.Commands.add('switchEnt', function(){ 
    cy.wait(2000).get("[data-e2eid='btn-switch-account']").click()
    cy.wait(1000).get("[data-e2eid='switch-to-enterprise-6']").click()    
    }
)

//assert document list
Cypress.Commands.add('assertDocList', function(){
    cy.wait(2000).get("[data-e2eid='document-list-filter-action-more']", {timeout: 60000}).should('be.visible')
    }
)

//input PIN
Cypress.Commands.add('inputPIN', function() {
    cy.get(".input-pin > div:nth-of-type(1) > .input__form").type('1')
    cy.get(".input-pin > div:nth-of-type(2) > .input__form").type('2')
    cy.get(".input-pin > div:nth-of-type(3) > .input__form").type('3')
    cy.get(".input-pin > div:nth-of-type(4) > .input__form").type('4')
    cy.get(".input-pin > div:nth-of-type(5) > .input__form").type('5')
    cy.get(".input-pin > div:nth-of-type(6) > .input__form").type('6')
    }
)

// //CHANGE OTP METHODS

// //Mapping OTP
const otpMethodSelectors = {
    email: el.selectEmail,
    sms: el.selectSMS,
    wa: el.selectWhatsApp,
    pin: el.selectPIN
}

// select methods
Cypress.Commands.add('selectOTPMethod', (method: string) => {
    const selectedMethod = otpMethodSelectors[method as keyof typeof otpMethodSelectors]

    cy.url().then((originalUrl) => {
        cy.wrap(originalUrl).as('originalUrl')

    cy.get(el.btnChangeMethod).click()
    cy.get(selectedMethod).should('be.visible').click()
    cy.get(el.btnContinueMethod).should('be.visible').click()
    })
})

// get otp
Cypress.Commands.add('inputOTP', (yopmail) => {
    cy.task('getOtpFromBackendTask', yopmail).then((otp) => {
      if (!otp) {
        throw new Error("Failed to retrieve OTP.")
      }
  
      cy.readFile('otp.txt', 'utf8').then((otpCode) => {
            const trimmedOtpCode = otpCode.trim()
  
            cy.get(el.inputOTPField).should('be.visible').type(trimmedOtpCode)
            cy.get(el.btnSubmitOTP).should('be.visible').click()
        })
    })
})
  
//filter to sign
Cypress.Commands.add('FiltertoSign', function(){
    cy.get("[data-e2eid='document-list-filter-item-status'] > .input").click()
    cy.get("[data-e2eid='document-list-filter-item-status'] button:nth-of-type(2)").click({force:true})
    }
)

//filter to review
Cypress.Commands.add('FiltertoReview', function(){
    cy.get("[placeholder='Actions']").click()
    cy.get("[data-e2eid='document-list-filter-item-status'] button:nth-of-type(3)").click({force:true})
    }
)

//filter to approve
Cypress.Commands.add('FiltertoApprove', function(){
    cy.get("[placeholder='Actions']").click()
    cy.get("[data-e2eid='document-list-filter-item-status'] button:nth-of-type(4)").click({force:true})
    }
)

//filter to stamp
Cypress.Commands.add('FiltertoStamp', function(){
    cy.get("[placeholder='Actions']").click()
    cy.get("[data-e2eid='document-list-filter-item-status'] button:nth-of-type(5)").click({force:true})
    }
)

//filter to seal
Cypress.Commands.add('FiltertoSeal', function(){
    cy.get("[placeholder='Actions']").click()
    cy.get("[data-e2eid='document-list-filter-item-status'] button:nth-of-type(6)").click({force:true})
    }
)

//click quick action button
Cypress.Commands.add('clickButtonQuickAction', function(){
    cy.get(".table-static--selectable tr:nth-of-type(1) span:nth-of-type(1) > div:nth-of-type(1)").click()
    cy.get("[data-e2eid='document-quickaction-action-otp']").click()
    }
)

//open full-page document
Cypress.Commands.add('openFullpage', function(){
    cy.get(".table-static--selectable tr:nth-of-type(1) span:nth-of-type(1) > div:nth-of-type(1)").click()
    cy.get("[data-e2eid='document-quickaction-action-fullpage']").click()
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    }
)

//confirm action button (sign, approve, stamp, seal)
Cypress.Commands.add('confirmButton', function(){
    cy.get("[type='submit']").click()
    }
)

//confirm action review
Cypress.Commands.add('confirmReview', function(){
    cy.get(".footer > .btn--primary").click()
    }
)

//select image stamp
Cypress.Commands.add('selectImageStamp', function(){
    cy.wait(2000).get(".gap-3 > label:nth-of-type(1)").click()
    cy.wait(2000).get(".w-full.btn--danger").click()
    cy.wait(4000)
    }
)
//select image seal
Cypress.Commands.add('selectImageSeal', function(){
    cy.wait(2000).get(".gap-3 > label:nth-of-type(1)").click()
    cy.wait(2000).get(".w-full.btn--danger").click()
    cy.wait(4000)
    }
)
//upload document
// Cypress.Commands.add('uploadFile', function(){
//     cy.get("[data-e2eid='btn-new-upload']").then(($btn) => {
//         if ($btn.is(":disabled")) {
//         return
//         } else {
//         cy.wait(3000).wrap($btn).click()
//         }
//     })
//     cy.get('.dropzone__input').attachFile('Multiplesign.pdf');
//     cy.get("[maxlength='280']").clear().type('upload document ').type(webappsfaker.internet.userName())
//     cy.wait(2000).get("[data-e2eid='btn-upload-continue']").click()
//     cy.wait(20000).get("[data-page-number='1'] > .textLayer", {timeout: 45000}).should('be.visible')
//     }
// )
Cypress.Commands.add('uploadFile', function(){
    cy.get("[data-e2eid='btn-new-upload']").then(($btn) => {
        if ($btn.is(":disabled")) {
            cy.log('Tombol upload dinonaktifkan')
            return
        } else {
            cy.wait(3000).wrap($btn).click()
        }
    });
    
    const fileName = 'Kalibrator.pdf';

    cy.fixture(fileName, 'base64').then((fileContent) => {
        cy.get('.dropzone__input').attachFile({
            fileContent,
            fileName,
            mimeType: 'application/pdf',
            encoding: 'base64'
        });
    });

    let sentences = webappsfaker.lorem.sentences(20);
    let sentencesWithoutSpaces = sentences.split(' ').join('');
    let trimmedSentences = sentencesWithoutSpaces.substring(0, 280);
    
    // cy.get("[maxlength='280']").clear().type('upload document ').type(webappsfaker.internet.userName())
    // cy.get("[maxlength='280']").clear().type(webappsfaker.lorem.sentences(10));
    cy.get("[maxlength='280']").clear().type(trimmedSentences);
    cy.wait(2000).get("[data-e2eid='btn-upload-continue']").click()
    // cy.get("[data-e2eid='btn-overwrite-remove'] > .radio__icon").click()
    // cy.get("[data-e2eid='btn-submit-overwrite']").click()
    cy.wait(20000).get("[data-page-number='1'] > .textLayer", {timeout: 45000}).should('be.visible')
    }
)

//upload document interop (keep signature)
Cypress.Commands.add('uploadFileKeepSign', function(){
    cy.get("[data-e2eid='btn-new-upload']").then(($btn) => {
        if ($btn.is(":disabled")) {
        return
        } else {
        cy.wait(3000).wrap($btn).click()
        }
    })
    const fileName = 'Multiplesign.pdf';
    
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
          cy.get('.dropzone__input').attachFile({
              fileContent,
              fileName,
              mimeType: 'application/pdf',
              encoding: 'utf8'
          });
      });

    cy.get("[maxlength='280']").clear().type('upload document ').type(webappsfaker.internet.userName())
    cy.wait(2000).get("[data-e2eid='btn-upload-continue']").click()
    cy.wait(2000).get("[data-e2eid='btn-overwrite-keep']").click()
    cy.wait(2000).get("[data-e2eid='btn-submit-overwrite']").click()
    cy.wait(20000).get("[data-page-number='1'] > .textLayer", {timeout: 45000}).should('be.visible')
    }
)

Cypress.Commands.add('saveToDraft', function(){
    cy.get(".btn--sm[data-e2eid='btn-close-setup']").click()
    cy.wait(2000).get(".btn--variant-ghost.btn--info").click()
    cy.wait(2000).get("[data-e2eid='document-list-filter-action-more']", {timeout: 60000}).should('be.visible')
    }
)

//add recipient signer
Cypress.Commands.add('addRecipient_EnterpriseSigner', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient2.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action signer
    cy.get("[data-e2eid='user-action-selector'] .list-group > span:nth-of-type(1)").click() 
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient personal signer
Cypress.Commands.add('addRecipient_PersonalSigner', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(1) .select__option-text").click() // set recipient as personal
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose personal action signer
    cy.get("[data-e2eid='btn-role-SIGNER']").click() 
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient approver
Cypress.Commands.add('addRecipient_EnterpriseApprover', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action approve 
    cy.get("[data-e2eid='user-action-selector'] span:nth-of-type(4)").click()

    //add button
    cy.get("[data-e2eid='btn-add']").click() 
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient reviewer
Cypress.Commands.add('addRecipient_EnterpriseReviewer', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    // cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.xpath("//div[@class='dropdown dropdown--open dropdown--divider dropdown--menu-md select select--open']//div[@class='select__option']/div[.='PT Padang Pagi Sore']").should('have.text', 'PT Padang Pagi Sore')
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action review
    cy.get("[data-e2eid='user-action-selector'] span:nth-of-type(3)").click()

    //add button
    cy.get("[data-e2eid='btn-add']").click() 
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient reviewer
Cypress.Commands.add('addRecipient_PersonalReviewer', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(1) .select__option-text").click() // set recipient as personal
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose personal action reviewer
    cy.get("[data-e2eid='btn-role-REVIEWER']").click() 
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient stamper
Cypress.Commands.add('addRecipient_EnterpriseStamper', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //[Choose enterprise action stamper
    cy.get("[data-e2eid='user-action-selector'] span:nth-of-type(5)").click() //ent stamper

    //add button
    cy.get("[data-e2eid='btn-add']").click() 
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient sealer
Cypress.Commands.add('addRecipient_EnterpriseSealer', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get(".select-role > div:nth-of-type(3) .dropdown").click() //choose enterprise
    // cy.get(".select-role > div:nth-of-type(3) button:nth-of-type(2)").click() //pt padang pagi sore
    cy.xpath("//div[@class='dropdown dropdown--open dropdown--divider dropdown--menu-md select select--open']//div[@class='select__option']/div[.='PT Padang Pagi Sore']").should('have.text', 'PT Padang Pagi Sore')

    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient
    
    //Choose enterprise action seal
    cy.get("[data-e2eid='user-action-selector'] .list-group > span:nth-of-type(2)").click()

    ///add button
    cy.get("[data-e2eid='btn-add']").click() 
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient sign + stamp
Cypress.Commands.add('addRecipient_EnterpriseSignStamp', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action sign stamp
    cy.get("[data-e2eid='btn-role-SIGNER']").click() 
    cy.get("[data-e2eid='btn-role-STAMPER']").click() //ent stamper
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//add recipient sign + seal
Cypress.Commands.add('addRecipient_EnterpriseSignSeal', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action signer, stamp, seal
    cy.get("[data-e2eid='btn-role-SIGNER']").click() 
    cy.get("[data-e2eid='btn-role-SEALER']").click() //ent seal
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//placement signature recipient
Cypress.Commands.add('placementSignature', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    cy.wait(2000).get("[data-testid='pdf-helipad-object']").click()
    // cy.get("[data-e2eid='doc-setup-finish']").click()
    // cy.get("[data-e2eid='doc-setup-confirm-finish']").click()
    }
)

//add recipient sign + stamp + seal
Cypress.Commands.add('addRecipient_EnterpriseSignStampSeal', function(){
    cy.wait(2000).get(".mt-5 > div:nth-of-type(2)").click()
    cy.get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.get(".border-muted").click()
    cy.wait(3000).get(".w-full.form-group .input").type(recipient.privyID)
    cy.wait(2000).get("[data-e2eid='search-result-0']").click()
    cy.wait(2000).get("[data-e2eid='user-account-selector'] > .input").click()

    //as an enterprise
    cy.get("[data-e2eid='user-account-selector'] button:nth-of-type(2)").click() // set recipient as enterprise
    cy.wait(1000).get("[data-e2eid='user-enterprise-selector'] > .input").click() //choose enterprise 
    cy.get("[data-e2eid='user-enterprise-selector'] button:nth-of-type(2)").click() //pt padang pagi sore
    cy.wait(1000).get("[data-e2eid='user-action-selector']").click() // pilih action recipient

    //Choose enterprise action signer, stamp, seal
    cy.get("[data-e2eid='btn-role-SIGNER']").click() 
    cy.get("[data-e2eid='btn-role-STAMPER']").click() //ent stamper
    cy.get("[data-e2eid='btn-role-SEALER']").click() //ent seal
    
    //add button
    cy.get("[data-e2eid='btn-add']").click()
    cy.get("[data-e2eid='btn-continue']").click()
    }
)

//placement signature recipient
Cypress.Commands.add('placementSignature', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    cy.wait(2000).get("[data-testid='pdf-helipad-object']").click()
    // cy.get("[data-e2eid='doc-setup-finish']").click()
    // cy.get("[data-e2eid='doc-setup-confirm-finish']").click()
    }
)

Cypress.Commands.add('placementMoreSignature', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    for (let i = 0; i < 5; i++) {
        cy.get(".py-4 > div:nth-of-type(1) > [data-testid='pdf-helipad-object']")
          .should('be.visible')
          .click();
        }
    // cy.get("[data-e2eid='doc-setup-finish']").click()
    // cy.get("[data-e2eid='doc-setup-confirm-finish']").click()
})


//placement signature recipient sign + stamp +seal
Cypress.Commands.add('placementSignatureSignStampSeal', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    cy.wait(2000).get("[data-e2eid='btn-placement-dikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikur_jr-SIGNER']").click()
    cy.wait(2000).get("[data-e2eid='btn-placement-dikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikur_jr-STAMPER']").click()
    cy.wait(2000).xpath("//div[@class='flex flex-col h-full px-6 py-4 space-y-3 overflow-x-hidden overflow-y-auto overscroll-contain']/div[3]").click()
    }
)

//placement signature recipient sign + stamp
Cypress.Commands.add('placementSignatureSignStamp', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    cy.wait(2000).get("[data-e2eid='btn-placement-dikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikur_jr-SIGNER']").click()
    cy.wait(2000).get("[data-e2eid='btn-placement-dikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikur_jr-STAMPER']").click()
    }
)
//placement signature recipient sign + seal
Cypress.Commands.add('placementSignatureSignSeal', function(){
    cy.wait(2000).get("[data-e2eid='btn-continue']").click()
    cy.wait(2000).get("[data-e2eid='btn-placement-dikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikurdikur_jr-SIGNER']").click()
    cy.wait(2000).xpath("//div[@class='flex flex-col h-full px-6 py-4 space-y-3 overflow-x-hidden overflow-y-auto overscroll-contain']/div[2]").click()
    }
)

//add signature
Cypress.Commands.add('addSignature', function(){

    cy.wait(2000).get("[data-e2eid='action-add-signature']").click()
    cy.wait(2000).get("[data-e2eid='action-confirm']").click()
    }
)

//add review
Cypress.Commands.add('addReview', function(){
    cy.get("[data-e2eid='action-confirm-review']").click()
    }
)

//add stamp
Cypress.Commands.add('addStamp', function(){
    cy.wait(2000).get("[data-e2eid='action-start-stamp']").click()
    }
)

//add seal
Cypress.Commands.add('addSeal', function(){
    cy.wait(2000).get("[data-e2eid='action-start-seal']").click()
    }
)

//add recipient only me (sign)
Cypress.Commands.add('addRecipientOnlyMe', function(){
    cy.wait(2000).get("[data-e2eid='doc-setup-menu-stage-recipient']").click()
    cy.wait(2000).get("[data-e2eid='add-me']").click()
    cy.wait(2000).get("[data-e2eid='btn-only-me-recipient'] > .toggle__switch").click()
    cy.get(".select__activator[data-testid='input']").click()
    cy.get("[aria-current='false']").click()
    cy.get("[data-testid='pdf-helipad-object']").click()
    cy.get("[data-e2eid='btn-add']").click()
    cy.wait(4000)
    // cy.wait(1000).get("[data-e2eid='doc-setup-finish']").click()
    // cy.wait(1000).get("[data-e2eid='doc-setup-confirm-finish']").click({ multiple: true })
})

//finish button
Cypress.Commands.add('finishButton', function(){
    cy.get("[data-e2eid='doc-setup-finish']").click()
    cy.get("[data-e2eid='doc-setup-confirm-finish']")
      .should('be.visible')
      .click({ multiple: true, force: true })
    cy.wait(2000)
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    }
)

//placement e-Meterai
Cypress.Commands.add('placementEmeterai', function(){
    cy.get(".mt-5 > div:nth-of-type(1)").click()
    cy.wait(2000)
    cy.get(".w-full.dropdown--menu-sm").click()
    cy.wait(2000)
    cy.get(".w-full.dropdown--menu-sm button:nth-of-type(1)").click()
    cy.get(".py-3.flex-col > .checkbox").click()
    cy.wait(2000)
    cy.get(".pdf-helipad").click()
    cy.wait(4000)
    cy.get(".ml-auto.btn--variant-solid").click()
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 45000}).should('be.visible')
    }
)

//place note
Cypress.Commands.add('placeNote', function(){
    cy.wait(12000).get("[data-e2eid='action-add-note']").click()
    cy.wait(2000).get("[data-e2eid='note-text-field']").type("ini adalah notes ")
    cy.wait(2000).get("[data-e2eid='note-show-detail'] > .toggle__switch").click()
    cy.wait(2000).get("[data-e2eid='note-save']").click()
    }
)

//bulkSign document
Cypress.Commands.add('bulkSign', function(){
    cy.get(".table-static--selectable .table-static__body > tr:nth-of-type(1) .checkbox").click()
    cy.wait(2000).get("[data-e2eid='document-list-filter-action-bulk-sign']").click()
    cy.wait(2000).get("[data-e2eid='document-modal-bulkaction-action-continue']").click()
    }
)

//more button doc list
Cypress.Commands.add('moreBtnDocList', function(){
    cy.get("[data-focused='true'] .btn--icon").click()
    cy.wait(2000).get("[data-focused='true'] .dropdown--no-caret > .dropdown__menu").click()
    }
)

//download from doc list
Cypress.Commands.add('downloadFromDocList', function(){
    cy.wait(2000).get(".table-static--selectable tr:nth-of-type(1) > td:nth-of-type(6) button:nth-of-type(1) > div:nth-of-type(1)").click()
    }
)

//history from doc list
Cypress.Commands.add('historyfromDocList', function(){
    cy.wait(2000).get(".table-static--selectable tr:nth-of-type(1) button:nth-of-type(2) > div:nth-of-type(1)").click()
    }
)

//archive from doc list
Cypress.Commands.add('archiveFromDocList', function(){
    cy.wait(2000).get(".table-static--selectable tr:nth-of-type(1) button:nth-of-type(3) > div:nth-of-type(1)").click()
    }
)

//retract from doc list
Cypress.Commands.add('retractDocList', function(){
    cy.wait(2000).xpath("//div[@class='dropdown dropdown--open dropdown--no-caret dropdown--menu-sm']//div[@class='dropdown__subitem dropdown__menu__container']//div[contains(.,'Retract')]").click()
    }
)

//copy link from doc list
Cypress.Commands.add('copylinkDocList', function(){
    cy.wait(2000).get(".table-static--selectable tr:nth-of-type(1) button:nth-of-type(5) > div:nth-of-type(1)").click()
    }
)

//more button doc view
Cypress.Commands.add('moreBtnDocView', function(){
    cy.get(".px-4.justify-end > .dropdown > .btn").click()
    })

//download from doc view
Cypress.Commands.add('downloadFromDocView', function(){
    cy.wait(2000).get(".px-4.justify-end .dropdown__menu button:nth-of-type(1)").click()
    }
)

//copy link from doc view
Cypress.Commands.add('copylinkDocView', function(){
    cy.wait(2000).get(".px-4.justify-end > .dropdown button:nth-of-type(2)").click()
    }
)

//archive from doc view
Cypress.Commands.add('archiveFromDocView', function(){
    cy.wait(2000).get(".px-4.justify-end button:nth-of-type(3)").click()
    cy.wait(2000).xpath("//div[@class='footer footer--align-end']/button[@class='btn btn--primary btn--variant-solid btn--md']").click()
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    }
)
//unarchive from doc view
Cypress.Commands.add('unarchiveFromDocView', function(){
    cy.wait(2000).xpath("//button[.='Unarchive']").click()
    cy.wait(2000).xpath("//div[@class='footer footer--align-end']/button[@class='btn btn--primary btn--variant-solid btn--md']").click()
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    }
)

//retract from doc view
Cypress.Commands.add('retractDocView', function(){
    cy.wait(2000).xpath("//div[@class='dropdown dropdown--open dropdown--no-caret dropdown--menu-sm']//button[.='Retract']").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
})

//reject from doc view
Cypress.Commands.add('rejectDocView', function(){
    cy.wait(2000).xpath("//div[@class='dropdown dropdown--open dropdown--no-caret dropdown--menu-sm']//button[.='Reject']").click()
    // cy.wait(1000).xpath("//div[26]//button[@class='btn btn--danger btn--variant-solid btn--md']").click()
    cy.wait(1000).xpath("//div[26]//button[@class='btn btn--danger btn--variant-solid btn--md']").click()
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')

})

//page Admin
Cypress.Commands.add('pageAdmin', function(){
    cy.wait(2000).get("[href='/admins']").click()
    cy.wait(2000).get(".table-static", {timeout: 60000}).should('be.visible')
    }
)

//add Admin
Cypress.Commands.add('addAdmin', function(){
    cy.wait(3000).get(".ml-4").click()
    cy.wait(2000).get("[placeholder='e.g. HY7780']").type(addAdmin.privyID  )
    cy.wait(2000).get(".dropdown--search-user > .dropdown__menu", {timeout: 60000}).should('be.visible')
    cy.wait(3000).get(".p-1").click()
    cy.wait(2000).get("[data-e2eid='admins-action-add']").click()    
    }
)

//search admin by name
 Cypress.Commands.add('searchAdminbyName', function(){
    cy.wait(3000).get("[placeholder='Search']").type('Devi').type("{enter}")
    cy.wait(2000).get(".input__clear").click()
    }
)

 //search admin by privyid
 Cypress.Commands.add('searchAdminbyPrivyID', function(){
    cy.wait(3000).get("[data-e2eid='admins-searchby'] .input__form").click()
    cy.wait(2000).get("[data-e2eid='admins-searchby'] button:nth-of-type(2)").click()
    cy.wait(3000).get("[placeholder='Search']").type(addAdmin.privyID).type("{enter}")
    cy.wait(2000).get(".input__clear").click()
    }
)

 //delete admin
 Cypress.Commands.add('deleteAdmin', function(){
    cy.wait(3000).get(".table-static__body > tr:nth-of-type(1) .btn").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
 })

 //directory outbox
 Cypress.Commands.add('directorySent', function(){
    cy.wait(3000).get("[href='/document/list/outbox']").click()
 })

 //inputIncorrectPIN
 Cypress.Commands.add('inputIncorrectPIN', function(language: 'en' | 'id'){
    const invalidPin = '112233'; // Ganti dengan PIN yang tidak valid
  
    // Input PIN yang tidak valid sekali
    cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(invalidPin); 
    cy.wait(2000); 
    cy.get('[type="submit"]').click(); 

    // Assert error message yang muncul sesuai dengan bahasa
    const errorMessage = language === 'en' ? 'Incorrect PIN' : 'PIN salah'; 
  
    // Assert error message yang muncul
      cy.get('.form-group__error > span') 
        .should('be.visible')
        .and('contain', 'Incorrect PIN'); 

    //Assert toast incorrect PIN
    cy.get('[data-testid="toast"]')
        .should('be.visible')
        .and('contain', 'Incorrect PIN');
  
      // Tunggu sebentar sebelum input berikutnya
      cy.wait(2000); 
    }
)

  //Salah input salah 5x
  Cypress.Commands.add('inputIncorrectPIN5x', function(language: 'en' | 'id') {
    const invalidPin = '112233'; // Ganti dengan PIN yang tidak valid
    const errorMessage = language === 'en' ? 'Incorrect PIN' : 'PIN salah'; 
    const expectedMessage = language === 'en' ? 'Too many attempts. Please try again in' : 'Terlalu banyak percobaan. Coba lagi dalam';
    const toastMessage = language === 'en' ? "You've entered PIN incorrectly 5 times" : 'Anda salah memasukkan PIN 5 kali';

    for (let i = 0; i < 6; i++) {
        // Input PIN yang tidak valid
        cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(invalidPin); 
        cy.wait(2000); 
        cy.get('[type="submit"]').click(); 

        if (i < 5) {
            // Assert error message yang muncul untuk 4 input pertama
            cy.get('.form-group__error > span') 
                .should('be.visible')
                .and('contain', errorMessage); 

            // Assert toast incorrect PIN
            cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', errorMessage);
        } else {
            // Pada input ke-5, assert countdown error message
            cy.wait(2000);
            cy.get('.form-group__error > span') 
                .should('be.visible')
                .and('contain', expectedMessage);

            // Assert countdown format
            cy.get('.form-group__error > span').invoke('text').then((text) => {
                console.log(text); // Lihat apa yang sebenarnya ada di dalam teks
                const regex = language === 'en' 
                    ? /Too many attempts\. Please try again in \d{2}:\d{2}/ 
                    : /Terlalu banyak percobaan\. Coba lagi dalam \d{2}:\d{2}/; // Tambahkan regex untuk bahasa Indonesia
                const match = text.match(regex);
                expect(match).to.exist; // Memastikan bahwa ada format countdown yang valid
            });

            // Assert toast message untuk input ke-5
            cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', toastMessage);
        }

        // Tunggu sebentar sebelum input berikutnya
        cy.wait(2000); 
    }
});

//inputIncorrectOTP
Cypress.Commands.add('inputIncorrectOTP', function(language: 'en' | 'id'){
    const invalidOTP = '112233'; // Ganti dengan OTP yang tidak valid
  
    // Input PIN yang tidak valid sekali
    cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(invalidOTP); 
    cy.wait(2000); 
    cy.get('[type="submit"]').click(); 

    // Assert error message yang muncul sesuai dengan bahasa
    const errorMessageOTP = language === 'en' ? 'OTP code is invalid' : 'Kode OTP tidak valid'; 
  
    // Assert error message yang muncul
      cy.get('.form-group__error > span') 
        .should('be.visible')
        .and('contain', errorMessageOTP); 

    //Assert toast incorrect PIN
    cy.get('[data-testid="toast"]')
        .should('be.visible')
        .and('contain', errorMessageOTP);
  
      // Tunggu sebentar sebelum input berikutnya
      cy.wait(2000); 
    }
)

  //Salah input salah OTP 5x
Cypress.Commands.add('inputIncorrectOTP5x', function(language: 'en' | 'id') {
    const invalidOTP = '112233'; // Ganti dengan OTP yang tidak valid
    const errorMessageOTP = language === 'en' ? 'OTP code is invalid' : 'Kode OTP tidak valid'; 
    const toastMessageOTP = language === 'en' ? 'OTP code is invalid' : 'Kode OTP tidak valid'; 
    const expectedMessageOTP = language === 'en' ? 'Please wait to confirm OTP' : 'Harap tunggu untuk mengonfirmasi OTP';

    for (let i = 0; i < 6; i++) {
        // Input PIN yang tidak valid
        cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(invalidOTP); 
        cy.wait(2000); 
        cy.get('[type="submit"]').click(); 

        if (i < 5) {
            // Assert error message yang muncul untuk 4 input pertama
            cy.get('.form-group__error > span') 
                .should('be.visible')
                .and('contain', errorMessageOTP); 

            // Assert toast incorrect PIN
            cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', toastMessageOTP);
        } else {
            // Pada input ke-5, assert countdown error message
            cy.wait(2000);
            cy.get('.form-group__error > span') 
                .should('be.visible')
                .and('contain', expectedMessageOTP);

            // Assert countdown format
            cy.get('.form-group__error > span').invoke('text').then((text) => {
                console.log(text); // Lihat apa yang sebenarnya ada di dalam teks
                const regex = language === 'en' 
                    ? /Please wait to confirm OTP in \d{1,2} minutes and \d{1,2} seconds/ 
                    : /Harap tunggu untuk mengonfirmasi OTP dalam \d{1,2} menit dan \d{1,2} detik/; // Tambahkan regex untuk bahasa Indonesia
                const match = text.match(regex);
                expect(match).to.exist; // Memastikan bahwa ada format countdown yang valid
            });

            // Assert toast message untuk input ke-5
            cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', toastMessageOTP);
        }

        // Tunggu sebentar sebelum input berikutnya
        cy.wait(2000); 
        
    }
});
 //folder draft
 Cypress.Commands.add('folderDraft', function(){
    cy.wait(3000).get("[href='/document/list/draft']").click()
 })

 //bulk delete doc
 Cypress.Commands.add('bulkDelete', function(){
    cy.get('.table-static__body > :nth-child(1) > .table-static__checkbox').click()
    cy.get("tr:nth-of-type(2) .checkbox__icon").click()
    cy.get("tr:nth-of-type(3) .checkbox__icon").click()
    cy.get("[data-e2eid='document-list-filter-action-bulk-delete']").click()
    cy.get(".modal-dialog__footer > .btn--primary").click()
 })

 //bulk archive doc
 Cypress.Commands.add('bulkArchiveActionRequired', function() {
    cy.get('[data-testid="select-placeholder"] > .input__form__activator').click();
    cy.xpath("//span[.='All periodsIt will take more time']").click({force: true});
    cy.get(':nth-child(1) > .table-static__checkbox > [data-testid="table-static-select"] > .checkbox__icon').click();
    cy.get("tr:nth-of-type(2) .checkbox__icon").click();
    cy.get("tr:nth-of-type(3) .checkbox__icon").click();
    cy.get(".btn--sm.btn--variant-ghost > .persona-icon").click();
    cy.get("[data-e2eid='document-list-filter-action-more'] button:nth-of-type(3)").click();
    cy.get(".modal-dialog__footer > .btn--primary").click();
});

//Upload document > 25 MB
Cypress.Commands.add('uploadFileLebih25MB', function(language: 'en' | 'id') {
    const toastSizeDocExceeds = language === 'en' ? 'Document exceeds 25MB' : 'Dokumen melebihi 25MB';

    //upload doc 30 MB
    cy.get("[data-e2eid='btn-new-upload']").then(($btn) => {
        if ($btn.is(":disabled")) {
            return;
        } else {
        cy.wait(3000).wrap($btn).click()
        }
    })
    cy.get('.dropzone__input').attachFile('30 MB.pdf');
    cy.wait(2000);
    cy.get('[data-testid="toast"]', { timeout: 10000 }) 
        .should('be.visible')
        .and('contain', toastSizeDocExceeds);
    cy.wait(2000)
    }
)

//upload document dengan title invalid
Cypress.Commands.add('uploadFileAndInvalidTitle', function(language: 'en' | 'id') {
    const errorTitleDoc = language === 'en' ? 'Can only contain letters, numbers, space, and special characters.' : 'Hanya dapat berisi huruf, angka, spasi, dan karakter spesial.';


    cy.get("[data-e2eid='btn-new-upload']").then(($btn) => {
        if ($btn.is(":disabled")) {
        return
        } else {
        cy.wait(3000).wrap($btn).click()
        }
    })
    cy.get('.dropzone__input').attachFile('Kalibrator.pdf');
    cy.get("[maxlength='280']").clear().type('안녕하세요').type(webappsfaker.internet.userName())
    cy.wait(2000).get("[data-e2eid='btn-upload-continue']").click()
    cy.get('.form-group__error') 
                .should('be.visible')
                .and('contain', errorTitleDoc);
    cy.wait(2000)
    }
)

//Input valid note signing personal
Cypress.Commands.add('actionWithReason', function(language: 'en' | 'id'){
    const validOTP = '123456'; // OTP valid
    const validNote = 'Test reason signing note Test reason signing note Test reason signing note Test reason signing note sampai 120 character'; //Valid note reason action document
    const toastDocSigned = language === 'en' ? 'Document signed' : 'Document ditandatangani';

    cy.get('.textarea__input').type(validNote);
    cy.wait(2000);
  
    // Input PIN yang valid
    cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(validOTP); 
    cy.wait(2000); 
    cy.get('[type="submit"]').click(); 

    //Assert success signing document
    cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', toastDocSigned);

    }
)

//Check reason sesuai tidak dengan inputan
Cypress.Commands.add('checkReasonInDocViewPersonal', function(language: 'en' | 'id'){
    const validOTP = '123456'; // OTP valid
    const validNote = 'Test reason signing note Test reason signing note Test reason signing note Test reason signing note sampai 120 character'; //Valid note reason action document
    const toastDocSigned = language === 'en' ? 'Document signed' : 'Document ditandatangani';
    const defaultReason = language === 'en' ? 'I approve this document' : 'Saya menyetujui dokumen ini';
    const expectedReason = `${defaultReason} - ${validNote}`;

    cy.get('.form-reason .textarea').type(validNote);
    cy.wait(2000);
  
    // Input PIN yang valid
    cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(validOTP); 
    cy.wait(2000); 
    cy.get('[type="submit"]').click(); 

    //Assert success signing document
    cy.get('[data-testid="toast"]')
                .should('be.visible')
                .and('contain', toastDocSigned);

    //Menunggu documentnya seleai loading
    cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')

    //Memastikan reason sesuai dengan yang di input
    cy.get("[data-e2eid='action-show-detail']").click();
    cy.get('.mb-4.card > .card__body > .freetext').should('contain', expectedReason);
    cy.wait(2000)
    }
)

//Input invalid note signing personal
Cypress.Commands.add('inputInvalidReason', function(){
    const validOTP = '123456'; // OTP valid
    const invalidNote = 'Invalid Note >>'; //Invalid note reason action document

    cy.get('.textarea__input').type(invalidNote);
    cy.wait(2000);
  
    // Input PIN yang valid
    cy.get('.input-pin > div:nth-of-type(1) > .input__form').clear().type(validOTP); 
    cy.wait(2000); 
    cy.get('[type="submit"]').click(); 

    // Assert bahwa border dari field yang error berwarna merah
    cy.get('.textarea')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(219, 219, 220)'); // Ganti dengan nilai RGB yang sesuai dengan warna merah yang digunakan
}
)

//Go to directory Sent
Cypress.Commands.add('folderSent', function(language: 'en' | 'id'){
    const directorySent = language === 'en' ? '&nbsp;Sent' : '&nbsp;Terkirim';

    // cy.get('[data-testid="nav-label"]').should('have.text', directorySent).click()
    cy.xpath("//a[contains(.,'Sent')]").click()
})

//Download original document
Cypress.Commands.add('downloadDocOri', function(language: 'en' | 'id'){
    const originalDoc = language === 'en' ? 'Original document' : 'Dokumen asli';
    const signedDoc = language === 'en' ? 'Signed document' : 'Dokumen bertanda tangan';  
    const auditTrailDoc = language === 'en' ? 'Audit trail' : 'Audit trail'; 
    const toastDownloadDOc = language === 'en' ? 'Document downloaded' : 'Dokumen didownload';

    cy.get('.table-static--selectable tr:nth-of-type(1) .dropdown--no-caret').click()
    cy.wait(2000).get(".table-static--selectable [data-popper-placement='bottom-end'] > div:nth-of-type(1) > .dropdown__subitem", {timeout: 60000}).should('be.visible')
    cy.get(".table-static--selectable [data-popper-placement='bottom-end'] [data-e2eid='document-list-table-more-option-download']").click()
    cy.wait(2000).get("[data-e2eid='document-modal-download'] .modal__content", {timeout: 60000}).should('be.visible')
    // Pastikan checkbox "Original document" tercentang
    cy.contains('label', originalDoc).find('input[type="checkbox"]').check({ force: true });

    // Pastikan checkbox "Signed document" tidak tercentang
    cy.contains('label', signedDoc).find('input[type="checkbox"]').uncheck({ force: true });

    // Pastikan checkbox "Audit trail" tidak tercentang
    cy.contains('label', auditTrailDoc).find('input[type="checkbox"]').uncheck({ force: true });
    
    cy.get("[data-e2eid='document-modal-download-action-download']").click()

    //Toast sukses download
    cy.get('[data-testid="toast"]', { timeout: 10000 }).should('be.visible').and('contain', toastDownloadDOc);

})

//Download signed document
Cypress.Commands.add('downloadDocSigned', function(language: 'en' | 'id'){
    const originalDoc = language === 'en' ? 'Original document' : 'Dokumen asli';
    const signedDoc = language === 'en' ? 'Signed document' : 'Dokumen bertanda tangan';  
    const auditTrailDoc = language === 'en' ? 'Audit trail' : 'Audit trail'; 
    const toastDownloadDOc = language === 'en' ? 'Document downloaded' : 'Dokumen didownload';

    cy.get('.table-static--selectable tr:nth-of-type(1) .dropdown--no-caret').click()
    cy.wait(2000).get(".table-static--selectable [data-popper-placement='bottom-end'] > div:nth-of-type(1) > .dropdown__subitem", {timeout: 60000}).should('be.visible')
    cy.get(".table-static--selectable [data-popper-placement='bottom-end'] [data-e2eid='document-list-table-more-option-download']").click()
    cy.wait(2000).get("[data-e2eid='document-modal-download'] .modal__content", {timeout: 60000}).should('be.visible')
    // Pastikan checkbox "Original document" tercentang
    cy.contains('label', originalDoc).find('input[type="checkbox"]').uncheck({ force: true });

    // Pastikan checkbox "Signed document" tidak tercentang
    cy.contains('label', signedDoc).find('input[type="checkbox"]').check({ force: true });

    // Pastikan checkbox "Audit trail" tidak tercentang
    cy.contains('label', auditTrailDoc).find('input[type="checkbox"]').uncheck({ force: true });
    
    cy.get("[data-e2eid='document-modal-download-action-download']").click()

    //Toast sukses download
    cy.get('[data-testid="toast"]', { timeout: 10000 }).should('be.visible').and('contain', toastDownloadDOc);

})

//Download audit trail document
Cypress.Commands.add('downloadAuditTrail', function(language: 'en' | 'id'){
    const originalDoc = language === 'en' ? 'Original document' : 'Dokumen asli';
    const signedDoc = language === 'en' ? 'Signed document' : 'Dokumen bertanda tangan';  
    const auditTrailDoc = language === 'en' ? 'Audit trail' : 'Audit trail'; 
    const toastDownloadDOc = language === 'en' ? 'Document downloaded' : 'Dokumen didownload';

    cy.get('.table-static--selectable tr:nth-of-type(1) .dropdown--no-caret').click()
    cy.wait(2000).get(".table-static--selectable [data-popper-placement='bottom-end'] > div:nth-of-type(1) > .dropdown__subitem", {timeout: 60000}).should('be.visible')
    cy.get(".table-static--selectable [data-popper-placement='bottom-end'] [data-e2eid='document-list-table-more-option-download']").click()
    cy.wait(2000).get("[data-e2eid='document-modal-download'] .modal__content", {timeout: 60000}).should('be.visible')
    // Pastikan checkbox "Original document" tercentang
    cy.contains('label', originalDoc).find('input[type="checkbox"]').uncheck({ force: true });

    // Pastikan checkbox "Signed document" tidak tercentang
    cy.contains('label', signedDoc).find('input[type="checkbox"]').uncheck({ force: true });

    // Pastikan checkbox "Audit trail" tidak tercentang
    cy.contains('label', auditTrailDoc).find('input[type="checkbox"]').check({ force: true });
    
    cy.get("[data-e2eid='document-modal-download-action-download']").click()

    //Toast sukses download
    cy.get('[data-testid="toast"]', { timeout: 10000 }).should('be.visible').and('contain', toastDownloadDOc);

})

//Download document bundle
Cypress.Commands.add('downloadDocBundle', function(language: 'en' | 'id'){
    const originalDoc = language === 'en' ? 'Original document' : 'Dokumen asli';
    const signedDoc = language === 'en' ? 'Signed document' : 'Dokumen bertanda tangan';  
    const auditTrailDoc = language === 'en' ? 'Audit trail' : 'Audit trail'; 
    const toastDownloadDOc = language === 'en' ? 'Document downloaded' : 'Dokumen didownload';

    cy.get('.table-static--selectable tr:nth-of-type(1) .dropdown--no-caret').click()
    cy.wait(2000).get(".table-static--selectable [data-popper-placement='bottom-end'] > div:nth-of-type(1) > .dropdown__subitem", {timeout: 60000}).should('be.visible')
    cy.get(".table-static--selectable [data-popper-placement='bottom-end'] [data-e2eid='document-list-table-more-option-download']").click()
    cy.wait(2000).get("[data-e2eid='document-modal-download'] .modal__content", {timeout: 60000}).should('be.visible')
    // Pastikan checkbox "Original document" tercentang
    cy.contains('label', originalDoc).find('input[type="checkbox"]').check({ force: true });

    // Pastikan checkbox "Signed document" tidak tercentang
    cy.contains('label', signedDoc).find('input[type="checkbox"]').check({ force: true });

    // Pastikan checkbox "Audit trail" tidak tercentang
    cy.contains('label', auditTrailDoc).find('input[type="checkbox"]').check({ force: true });
    
    cy.get("[data-e2eid='document-modal-download-action-download']").click()

    //Toast sukses download
    cy.get('[data-testid="toast"]', { timeout: 10000 }).should('be.visible').and('contain', toastDownloadDOc);

})

//switch enterprise DEV
Cypress.Commands.add('switchEntDev', function(){ 
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    cy.wait(1000).get("[data-e2eid='btn-switch-account'] > .btn").click({force:true})
    cy.wait(2000).xpath("//button[.='PT TEST PONARI SWIWIT']").should('have.text', 'PT TEST PONARI SWIWIT').click()
    }
)

//Go to directory Completed
Cypress.Commands.add('folderCompleted', function(language: 'en' | 'id'){
    const directorySent = language === 'en' ? '&nbsp;Completed' : '&nbsp;Selesai';
    cy.xpath("//a[contains(.,'Completed')]").click()
})

//Bulk download signed document
Cypress.Commands.add('bulkDownloadSignedDoc', function(language = 'en') {

    // Hitung jumlah checkbox yang dicentang
    let expectedCount = 3;

    // Tentukan selector untuk checkbox yang relevan
    const checkboxSelectors = [
        ".table-static--selectable .table-static__body > tr:nth-of-type(1) input[type='checkbox']",  // Checkbox pertama
        ".table-static--selectable .table-static__body > tr:nth-of-type(2) input[type='checkbox']",  // Checkbox kedua
        ".table-static--selectable .table-static__body > tr:nth-of-type(3) input[type='checkbox']"   // Checkbox ketiga
    ];

    // Loop melalui semua checkbox dan hitung yang dicentang
    checkboxSelectors.forEach(selector => {
    cy.get(selector)
        .then($checkbox => {
            if (!$checkbox.is(':checked')) {
                cy.wrap($checkbox).check({ force: true });
                expectedCount += 1; // Jika checkbox dicentang, tambah 1 pada expectedCount
            }
        });
    });

    // Tunggu tombol Download terlihat dan klik
    cy.wait(2000).xpath("//div[@class='flex flex-shrink-0 pb-3 space-x-2']/button[contains(.,'Download')]").click();

    // Tunggu modal untuk muncul (kalau ada modal, bisa di-skip jika tidak dibutuhkan)
    cy.get("[data-e2eid='document-modal-bulkaction'] .modal__content", { timeout: 10000 })
        .should('be.visible');

    // Klik tombol "Continue" setelah memverifikasi modal
    cy.get("[data-e2eid='document-modal-bulkaction-action-continue']").click();

    // Verifikasi jumlah dokumen yang berhasil diunduh melalui Toast
    let toastText;
    if (language === 'en') {
        toastText = `${expectedCount} documents downloaded`;
    } else if (language === 'id') {
        toastText = `${expectedCount} dokumen didownload`;
    }

    // Verifikasi apakah toast muncul dengan teks yang sesuai
    cy.get('[data-testid="toast"]', { timeout: 100000 })  // Menunggu munculnya toast
        .should('be.visible')  // Memastikan toast muncul
        .should('contain', toastText);  // Memastikan toast mengandung teks yang benar
});

