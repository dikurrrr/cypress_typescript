it('Enterprise - Document_View - Sign ', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoStamp()
    cy.assertDocList()
    cy.openFullpage()
    cy.addStamp()
    cy.selectImageStamp()
    cy.inputPIN()
    cy.confirmButton()
    cy.klirkukiDocView()
})



