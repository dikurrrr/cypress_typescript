it('Personal - Document_List - Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoSign()
    cy.assertDocList()
    cy.openFullpage()
    cy.moreBtnDocView()
    cy.rejectDocView()
})