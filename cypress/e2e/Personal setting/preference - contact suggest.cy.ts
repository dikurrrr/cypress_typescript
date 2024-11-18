it('Personal setting - contact suggest', () => {
    cy.login()
    cy.ProfileSetting()
    cy.pagePreference()
    cy.switchContactSuggest()
})