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
Cypress.Commands.add('SignIn', () => { 

    cy.visit( 'http://automationexercise.com')
    cy.get("a[href='/login']").click();
    cy.get('[data-qa="login-email"]').type('amalepoonam15@gmail.com');
    cy.get('[data-qa="login-password"]').type('Poonam@123');
    cy.get('button').contains('Login').click();
    })
    Cypress.Commands.add('Product', () => { 
        cy.get('.single-products').each(($el,index,list)=>{
            if($el.text().includes("Rose Pink Embroidered Maxi Dress")){
                cy.get('.add-to-cart').eq(index).click();
            }

        })

    
    })
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