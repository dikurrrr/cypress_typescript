it('Enterprise - Document_View - Sign ', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSeal()
    cy.assertDocList()
    cy.openFullpage()
    cy.addSeal()
    cy.selectImageSeal()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkukiDocView()
})



