it('Personal setting - security', () => {
    cy.login()
    cy.ProfileSetting()
    cy.pageSecurity()
    cy.SwitchOTP()

    cy.wait(10000).clearCookies()

})
  