it('Enterprise - Doc List - Sign', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseSigner()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()

})
  