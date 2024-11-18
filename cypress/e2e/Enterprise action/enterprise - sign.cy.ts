it('Enterprise - Document_List - Sign', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()
})



