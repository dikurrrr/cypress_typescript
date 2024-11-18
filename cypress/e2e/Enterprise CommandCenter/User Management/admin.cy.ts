it('Enterprise - Admin - add & remove',() => {
    cy.loginCommandCenter()
    cy.pageAdmin()
    cy.addAdmin()
    cy.searchAdminbyName()
    cy.searchAdminbyPrivyID()
    cy.deleteAdmin()
    cy.klirkukiAdm()
})
  