it('Personal - Document_List - Invalid Note Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.inputInvalidReason()
    cy.klirkuki() 
    
})