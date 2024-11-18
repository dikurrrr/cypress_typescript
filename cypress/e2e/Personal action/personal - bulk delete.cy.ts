it('Personal - Document_View - Archive - Unarchive', () => {
    cy.login()
    cy.get(".modal-event .persona-icon").click()
    cy.folderDraft()
    cy.bulkDelete()
    cy.klirkuki()

})