it('User roles - Employee - add & remove.cy',() => {
    cy.loginCommandCenter()
    cy.pageUserRoles()
    cy.addEmployee()
    cy.chooseRoles()
    cy.deleteEmployee()
    cy.klirkukiAdm()
})
  