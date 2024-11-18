import { getAccount } from '../utils/account'

/// <reference types="cypress-xpath" />

//Go to profile setting
Cypress.Commands.add('ProfileSetting', function(language: 'en' | 'id'){
    const statusSubs = language === 'en' ? 'Active' : 'Aktif';

    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', statusSubs)
    cy.wait(2000).get(".nav__item--avatar").click()
    cy.wait(2000).get(".dropdown--divider button:nth-of-type(4)").click()
    }
)
// page activities
Cypress.Commands.add('pageActivities', function(){
    cy.get("[href='/settings/activities']").click()
    cy.wait(5000)
    }
)
//page preference
Cypress.Commands.add('pagePreference', function(){
    cy.wait(2000).get("[href='/settings/preferences']").click()
    }
)
//switch contact toogle
Cypress.Commands.add('switchContactSuggest', function(){
    cy.wait(2000).get(".space-y-10 > div:nth-of-type(3) > .toggle").click()
        cy.wait(2000).get(".toggle--checked.toggle--pill").click()
        cy.wait(2000).get(".space-y-10 > div:nth-of-type(3) > .toggle").click()
    }
)

// Cypress.Commands.add('pageContact', function(){

//     }
// )

//page contact
Cypress.Commands.add('pageContact', function(){
    cy.get("[href='/settings/contact']").click()
    }
)

Cypress.Commands.add('addContact', function(){
    //cy.wait(2000).get(".btn--danger").click({multiple:true})
    cy.get(".flex-shrink-0.dropdown").click()
    cy.get(".flex-shrink-0.dropdown > .dropdown__menu button:nth-of-type(1)").click()
    cy.get(".form-group__inputs > .input").type("DEVDI4567")
    cy.wait(2000).get(".dropdown--search-user .dropdown__subitem").should('be.visible')
    cy.wait(2000).get(".dropdown--search-user .dropdown__subitem").click()
    cy.get(".btn--primary").click()
    }
)

//search contact by Name
Cypress.Commands.add('searchContactbyName', function(){
    cy.wait(1000).get(".input-group > .dropdown > .input").click()
    cy.wait(2000).get("[placeholder='Search']").type('dian').type("{enter}") // cari user by privyID
})

//search contact by PrivyID
Cypress.Commands.add('searchContactbyPrivyID', function(){
    cy.wait(1000).get(".input-group > .dropdown > .input").click()
    cy.wait(1000).get(".input-group button:nth-of-type(2)").click()
    cy.wait(2000).get("[placeholder='Search']").type('DEVDI4567').type("{enter}")
    cy.wait(1000).get(".input-group > .input > .persona-icon").click()
})

//remove contact
Cypress.Commands.add('removeContact', function(){
    cy.wait(1000).get(".table-static__table", {timeout: 60000}).should('be.visible')
    cy.wait(1000).get(':nth-child(1) > .text-right > [data-testid="dropdown"] > [data-testid="btn"]').click()
    cy.wait(2000).get(".text-right button:nth-of-type(2)").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
    }
)

//page signature
Cypress.Commands.add('pageSignature', function(){
    cy.wait(2000).get("[href='/settings/signature']").click()
})

//add signature
Cypress.Commands.add('addImageSignature', function(){
    cy.get(".flex-shrink-0.btn").click()
    cy.get(".personal-signature__sidebar > button:nth-of-type(2)").click()
    cy.wait(1000).get("[placeholder='Write your name']").type('Create Signature')
    cy.wait(1000).get("[placeholder='Write initial']").type("Create Initial")
    cy.wait(2000).get(".create-signature__previews > label:nth-of-type(2) .create-signature__list").click()
    cy.wait(2000).get("div:nth-of-type(8) .btn--primary").click()
    cy.get(".notify-group", {timeout: 60000}).should('be.visible')

})

//show signature details
Cypress.Commands.add('showSignatureDetails', function(){
    cy.wait(2000).get(".toggle--pill > .toggle__switch").click()
    cy.wait(2000).get(".toggle--pill > .toggle__switch").click()
})

//remove signature
Cypress.Commands.add('removeSignature', function(){
    cy.wait(2000).get(".space-y-5 > div:nth-of-type(2) .btn--variant-ghost").click({force:true})
    cy.wait(1000).xpath("//button[.='Continue']").click()
    cy.get(".notify-group", {timeout: 60000}).should('be.visible')
    //cy.wait(2000).get(".btn--danger").click({multiple:true})
})

//page security
Cypress.Commands.add('pageSecurity', function(){
    cy.wait(2000).get("[href='/settings/security']").click()
})

//switch OTP personal setting
Cypress.Commands.add('SwitchOTP', function(){
    cy.wait(1000).get(".input").click()
    cy.wait(2000).get(".dropdown__menu--has-prepend button:nth-of-type(1)").click()
    cy.wait(1000).get(".input").click()
    cy.wait(2000).get(".dropdown__menu--has-prepend button:nth-of-type(2)").click()
    cy.wait(1000).get(".input").click()
    cy.wait(2000).get(".dropdown__menu--has-prepend button:nth-of-type(3)").click()
    cy.wait(1000).get(".input").click()
    cy.wait(2000).get(".dropdown__menu--has-prepend button:nth-of-type(5)").click()
})

//Add diri sendiri ke contact 
Cypress.Commands.add('addYourSelfToContact', function(accountName: string = 'recipient second') {

    // Mengambil informasi akun dari getAccount
    getAccount(accountName).then((account) => {
    const loggedInUser = account.privyid;
    const language = Cypress.env('LANGUAGE') || 'id'; // Atur sesuai cara kamu mengatur bahasa
    const toastCannotAddYourSelf = language === 'en' 
            ? 'You cannot add yourself to the Contacts' 
            : 'Anda tidak dapat menambahkan diri sendiri ke kontak';
    
    cy.get(".flex-shrink-0.dropdown").click()
    cy.get(".flex-shrink-0.dropdown > .dropdown__menu button:nth-of-type(1)").click()
    cy.get(".form-group__inputs > .input").type(loggedInUser)
    cy.wait(2000).get(".dropdown--search-user .dropdown__subitem").should('be.visible');
    cy.get(".dropdown--search-user .dropdown__subitem").contains(loggedInUser).click();// Klik pada hasil pencarian yang sesuai dengan akun
    cy.get(".btn--primary").click()// Klik tombol untuk menyelesaikan penambahan kontak
    cy.get('[data-testid="toast"]').should('be.visible').and('contain', toastCannotAddYourSelf);
    cy.wait(1000)
    })
})
