it('Personal - Document_List - Sign with additional note reason', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.actionWithReason('id')
    cy.klirkuki()
})