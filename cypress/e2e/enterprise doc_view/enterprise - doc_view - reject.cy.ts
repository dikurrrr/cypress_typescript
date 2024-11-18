it('Enterprise - Document_View - Reject ', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.openFullpage()
    cy.optionButtonDocView()
    cy.rejectDoc()
    cy.klirkukiDocView()




})