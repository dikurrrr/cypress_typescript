it('Enterprise - Payment History ',() => {
    cy.loginCommandCenter()
    cy.pagePaymentHistory()
    cy.detailPayment()
    cy.wait(3000)
    cy.klirkukiAdm()
})

