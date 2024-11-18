it('Personal setting - add remove contact', () => {
    cy.login()
    cy.ProfileSetting()
    cy.pageContact()
    cy.addContact()
    cy.searchContactbyName()
    cy.searchContactbyPrivyID()
    cy.removeContact()
})