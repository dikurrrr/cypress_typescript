it('Enterprise - Document_View - Sign ', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoReview()
    cy.assertDocList()
    cy.openFullpage()
    cy.addReview()
    cy.confirmReview()
    cy.klirkukiDocView()
})



