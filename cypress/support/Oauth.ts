import * as el from '../support/elements/login-page-element'
import { getEnv } from '../utils/env'
import { getAccount } from '../utils/account'

// //data login web-app
// const username = {privyID: 'DAIK0000'};
// const pass = {password: 'Akuntes1.'}
// const pageSTG = {login: 'https://stg-web-apps-fe-carstensz.privy.id/'}
// const pageDEV = {login: 'https://web-apps-fe.carstensz.privydev.id/'}

// //data login enterprise
// const user_adm = {privyID: 'DAIK0000'};
// const pass_adm = {password: 'Akuntes1.'}
// const pageCC = {loginCC: 'https://stg-enterprise-command-center-dashboard-carstensz.privy.id/'}

// // login stg
// Cypress.Commands.add('loginSTG', () => {
//     cy.visit(pageSTG.login)
//     cy.get("[name='user[privyId]']").type(username.privyID)
//     cy.get(".btn-brand").click()
//     cy.get("[name='user[secret]']").type(pass.password)
//     cy.get(".btn-brand").click()
//     }
// )

// // login dev
// Cypress.Commands.add('loginDEV', () => {
//     cy.visit(pageDEV.login)
//     cy.get("[name='user[privyId]']").type(username.privyID)
//     cy.get(".btn-brand").click()
//     cy.get("[name='user[secret]']").type(pass.password)
//     cy.get(".btn-brand").click()
//     }
// )

// //login command-center
// Cypress.Commands.add('loginCC', () => {
//     cy.visit(pageCC.loginCC)
//     cy.get("[name='user[privyId]']").type(user_adm.privyID)
//     cy.get(".btn-brand").click()
//     cy.get("[name='user[secret]']").type(pass_adm.password)
//     cy.get(".btn-brand").click()
//     }
// )

Cypress.Commands.add('login', (accountName = 'recipient fourth') => {
    getAccount(accountName).then((account) => {
        const { privyid, password } = account;
        // cy.visit(getEnv('APP_URL'));
        // cy.get(el.inputPrivyId).type(privyid);
        // cy.get(el.btnSubmit).click();
        // cy.get(el.inputPassword).type(password);
        // cy.get(el.btnSubmit).click();
        cy.visit(getEnv('APP_URL'));
        cy.wait(2000);
        cy.get(el.inputPrivyId2).type(privyid);
        cy.get(el.btnContinueLogin).click();
        cy.get(el.inputPassword2).type(password);
        cy.get(el.btnContinueLogin).click();
        
    });
});

Cypress.Commands.add('loginCommandCenter', (accountName = 'recipient second') => {
    getAccount(accountName).then((account) => {
        const { privyid, password } = account;
        cy.visit(getEnv('APP_URL_ADMIN'));
        cy.get(el.inputPrivyId).type(privyid);
        cy.get(el.btnSubmit).click();
        cy.get(el.inputPassword).type(password);
        cy.get(el.btnSubmit).click();
    });
});
