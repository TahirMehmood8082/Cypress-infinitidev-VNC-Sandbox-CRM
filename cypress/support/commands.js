// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
import Login from "../PageObjects/LoginPage"

Cypress.Commands.add('successLoginVNCSandbox', ()=>{
    
    cy.visit("https://vncproject.sandbox.vnc.de/crm", { pageLoadTimeout: 120000 })

    cy.fixture('sandboxcrm').then((data)=>{
        const ln = new Login()
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickLogin()
        ln.verifyLogin()
    })
   
})

Cypress.Commands.add('failureLoginVNCSandbox', ()=>{
    
   cy.visit("https://vncproject.sandbox.vnc.de/crm")

    cy.fixture('sandboxcrm2').then((fixtureData)=>{
        const ln = new Login()
        cy.log(`Fixture Data: *******${fixtureData}**************`)
       
        fixtureData.map(data => {
            
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickLogin()
            ln.verifyFailedLogin()

        });  
    })
   
})