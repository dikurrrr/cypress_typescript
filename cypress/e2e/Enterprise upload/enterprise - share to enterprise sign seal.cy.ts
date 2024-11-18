it('Owner personal - recipient enterprise', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseSignSeal()
    cy.placementSignatureSignSeal()
    cy.finishButton()
    cy.klirkuki()

})