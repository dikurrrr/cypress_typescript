it('Personal - doc List - Bulk Archive', () => {
    cy.login()
    cy.wait(6000)
    cy.bulkArchiveActionRequired()
    cy.klirkuki()

})