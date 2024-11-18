it('Personal - Document_View - Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.openFullpage()
    cy.addSignature()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()

})
