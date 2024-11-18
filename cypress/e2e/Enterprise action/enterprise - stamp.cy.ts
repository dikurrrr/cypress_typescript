it('Enterprise - Document_List - Stamp', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoStamp()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.selectImageStamp()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()
})



