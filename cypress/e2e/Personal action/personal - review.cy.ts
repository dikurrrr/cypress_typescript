it('Personal - Document_List - Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.FiltertoReview()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.confirmReview()
    cy.klirkuki()
})