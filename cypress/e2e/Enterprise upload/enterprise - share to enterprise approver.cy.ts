it('Enterprise - Doc List - Sign', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseApprover()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()

})
  
