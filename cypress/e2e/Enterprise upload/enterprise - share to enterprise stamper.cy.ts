it('Enterprise - Doc List - Sign', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseStamper()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()

})
  
