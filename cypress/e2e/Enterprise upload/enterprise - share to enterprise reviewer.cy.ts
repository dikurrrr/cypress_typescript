it('Enterprise - Doc List - Review', () => {
    cy.login()
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseReviewer()
    cy.finishButton()
    cy.klirkuki()

})
  
