import { getAccount } from '../../utils/account'

it('personal - upload document interop', () => {
    cy.login()
    cy.assertDocList()
    cy.uploadFileKeepSign()
    cy.addRecipientOnlyMe()
    cy.finishButton()
    cy.klirkuki()

})