it('Personal setting - add yourself to contact', () => {
    cy.login()
    cy.ProfileSetting('id')
    cy.pageContact()
    cy.addYourSelfToContact();
})