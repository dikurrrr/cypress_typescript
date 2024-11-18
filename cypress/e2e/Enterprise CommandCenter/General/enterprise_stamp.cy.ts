it('Enterprise - Stamp - add remove',() => {
    cy.loginCommandCenter()
    cy.pageStamp()
    cy.uploadStamp()
    cy.deleteStamp()
    cy.klirkukiAdm()
})
  