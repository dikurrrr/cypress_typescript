it('Personal - Document_List - Bulk Download Signed Document', () => {
    cy.login()
    cy.switchEntDev()
    cy.folderCompleted('en')
    cy.bulkDownloadSignedDoc('en')
})