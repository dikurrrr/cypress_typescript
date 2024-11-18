it('Personal - Document_List - Download Document', () => {
    cy.login()
    cy.switchEntDev()
    cy.folderSent('en')
    cy.downloadDocOri('en')
    cy.downloadDocSigned('en')
    cy.downloadAuditTrail('en')
    cy.downloadDocBundle('en')
})