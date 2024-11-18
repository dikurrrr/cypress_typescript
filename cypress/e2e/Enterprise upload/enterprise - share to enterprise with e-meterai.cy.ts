it('Enterprise - Doc List - Sign', () => {
    cy.login()
    cy.get(".space-y-6.flex", {timeout:15000}).should('be.visible')
    cy.wait(3000).get(".bg-inverse").click() // close agustusan
    cy.wait(3000).get(".opacity-30").click() // close survey
    cy.switchEnt()
    cy.assertDocList()
    cy.uploadFile()
    cy.placementEmeterai()
    cy.addRecipient_EnterpriseSigner()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()
    //cy.wait(5000).clearCookies

})
  
