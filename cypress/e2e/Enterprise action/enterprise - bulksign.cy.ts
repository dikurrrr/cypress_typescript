it('Enterprise - Document_List - bulkSign', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.bulkSign()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkuki()
})



