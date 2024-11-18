it('Personal setting - activities', () => {
    cy.login()
    cy.ProfileSetting()
    cy.pageActivities()
})
  