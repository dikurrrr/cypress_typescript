it('Enterprise - Document Category - add & remove',() => {
    cy.loginCommandCenter()
    cy.pageCategory()
    cy.addCategory()
    cy.editCategory()
    cy.searchCategory()
    cy.deleteCategory()
    cy.klirkukiAdm()
})
  