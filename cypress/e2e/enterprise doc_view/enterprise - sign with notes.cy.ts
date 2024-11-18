it('Enterprise - Sign with Notes', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.openFullpage()
    cy.placeNote()
    cy.addSignature()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkukiDocView()
})



