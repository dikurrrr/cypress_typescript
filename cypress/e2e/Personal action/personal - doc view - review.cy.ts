it('Personal - Document_View - Review ', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoReview()
    cy.assertDocList()
    cy.openFullpage()
    cy.addReview()
    cy.confirmReview()
    cy.klirkukiDocView()
})