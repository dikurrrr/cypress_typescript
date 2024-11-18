it('Enterprise - Document_List - Seal', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSeal()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.selectImageStamp()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()
})



