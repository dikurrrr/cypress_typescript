it('Personal - Document_List - Download Document', () => {
    cy.login()
    cy.folderSent('id')
    cy.downloadDocOri('id')
    cy.downloadDocSigned('id')
    cy.downloadAuditTrail('id')
    cy.downloadDocBundle('id')
})