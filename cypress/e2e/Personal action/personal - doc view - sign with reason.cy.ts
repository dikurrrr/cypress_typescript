it('Personal - Document_List - Sign with additional note reason', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.openFullpage()
    cy.addSignature()
    cy.checkReasonInDocViewPersonal('id')
    cy.klirkuki()
})