it('Personal - Upload - Share - Sign', () => {
    cy.login()
    cy.assertDocList()
    cy.uploadFile()
    cy.addRecipient_PersonalSigner()
    cy.placementSignature()
    cy.finishButton()
    cy.klirkuki()
})

// it('Personal - Upload - Share - Sign', () => {
//     cy.login('account normal')
//     // cy.get(".modal__dismiss").click()
//     cy.get("[data-e2eid='document-list-table-loader']").should('be.visible')
//     cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')

//     for (let i = 0; i < 5; i++) {
//         cy.log(`Upload to ${i + 1}`)
//         cy.uploadFile()
//         cy.addRecipient_PersonalSigner()
//         cy.placementSignature()
//         // cy.placementMoreSignature()
//         cy.finishButton()
//         cy.wait(2000).get(".btn--sm[data-e2eid='btn-close-setup']").click()

//     }
//     cy.klirkuki()
// })


// it('Personal - Upload - Save to Draft', () => {
//     cy.login('recipient six')
//     cy.get("[data-e2eid='document-list-table-loader']").should('be.visible')
//     cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
//     // cy.switchEnt()
//     cy.assertDocList()
    
//     for (let i = 0; i < 15; i++) {
//         cy.log(`Upload to ${i + 1}`)
//         cy.uploadFile()
//         cy.saveToDraft()
//     }
    
//     cy.klirkuki() 
// })