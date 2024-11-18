it('Owner personal - add recipient only me', () => {
    cy.login('recipient first')
    cy.assertDocList()
    cy.get(".cursor-pointer.right-3").click()
    cy.uploadFile()
    cy.addRecipientOnlyMe()
    cy.finishButton()
    cy.klirkuki()

})