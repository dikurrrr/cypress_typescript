import { getAccount } from '../../utils/account'

it('Personal - Upload - Share - Review', () => {
    cy.login()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_PersonalReviewer()
    cy.finishButton()
    cy.klirkuki()

})