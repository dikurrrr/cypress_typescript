it('Enterprise - Document_View - Sign ', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoApprove()
    cy.assertDocList()
    cy.openFullpage()
    cy.addSignature()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkukiDocView()
})



