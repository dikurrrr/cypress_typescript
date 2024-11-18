it('Enterprise - Seal - add remove',() => {
    cy.loginCommandCenter()
    cy.pageSeal()
    cy.uploadSeal()
    cy.deleteSeal()
    cy.klirkukiAdm()
})
  