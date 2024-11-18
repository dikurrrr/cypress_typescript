it('Personal - Document_View - Archive - Unarchive', () => {
    cy.login()
    cy.assertDocList()
    cy.openFullpage()
    cy.moreBtnDocView()
    cy.archiveFromDocView()
    cy.unarchiveFromDocView()
})