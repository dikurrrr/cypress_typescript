it('Enterprise - Email Logo - add & remove',() => {
    cy.loginCommandCenter()
    cy.pageEmailLogo()
    cy.switchToogleEmailLogo()
    cy.uploadLogo1()
    cy.uploadLogo2()
    cy.klirkukiAdm()
})
  