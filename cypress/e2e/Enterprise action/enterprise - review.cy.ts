it('Enterprise - Document_List - Review', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.FiltertoReview()
    cy.assertDocList()
    cy.clickButtonQuickAction()
    cy.confirmReview()
    cy.klirkuki()
})



