it('Enterprise - Group - add & remove',() => {
    cy.loginCommandCenter()
    cy.pageGroup()
    cy.createGroup()
    cy.addmemberGroup()
    cy.updateGroup()
    cy.searchGroupbyName()
    cy.searchGroupbyShort()
    cy.deleteGroup()
    cy.klirkukiAdm()
})
  