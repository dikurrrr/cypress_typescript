it('Owner personal - recipient enterprise', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseSignStamp()
    cy.placementSignatureSignStamp()
    cy.finishButton()
    cy.klirkuki()

})