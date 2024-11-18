it('Owner personal - recipient enterprise', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseSignStampSeal()
    cy.placementSignatureSignStampSeal()
    cy.finishButton()
    cy.klirkuki()

})