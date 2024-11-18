import { getAccount } from '../../utils/account'

it('Owner personal - recipient enterprise', () => {
    cy.login()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_EnterpriseSigner()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()

})