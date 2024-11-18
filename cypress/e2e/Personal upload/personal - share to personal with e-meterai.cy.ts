it('Personal - Upload - Share - eMeterai - Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.uploadFile()
    cy.placementEmeterai()
    cy.addRecipient_PersonalSigner()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()
    //cy.wait(5000).clearCookies

})
  
