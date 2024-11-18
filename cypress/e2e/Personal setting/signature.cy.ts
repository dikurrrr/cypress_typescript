it('Personal setting - signature', () => {
    cy.login()
    cy.ProfileSetting()
    cy.pageSignature()
    cy.addImageSignature()
    cy.showSignatureDetails()
    cy.removeSignature()
    cy.clearCookies()
})
  