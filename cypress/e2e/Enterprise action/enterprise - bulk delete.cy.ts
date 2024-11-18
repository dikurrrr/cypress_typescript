it('Enterprise - Draft - Bulk Delete', () => {
    cy.login()
    cy.switchEnt()
    cy.folderDraft()
    cy.bulkDelete()
    cy.klirkuki()

})