it('Enterprise - Document_List - Approve', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoApprove()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()
})



