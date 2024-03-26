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

const petUrl = '/pet'
const storeUrl = '/store'
const userUrl = '/user'

Cypress.Commands.add('createAPet', (body) => { 
    cy.request({
        method: 'POST',
        url: petUrl,
        body: body,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateAPet', (body) => { 
    cy.request({
        method: 'PUT',
        url: petUrl,
        body: body,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getStoreInventory', () => { 
    cy.request({
        method: 'GET',
        url: `${storeUrl}/inventory`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOrderById', (id) => { 
    cy.request({
        method: 'GET',
        url: `${storeUrl}/order/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getUserByUsername', (username) => { 
    cy.request({
        method: 'GET',
        url: `${userUrl}/${username}`,
        failOnStatusCode: false
    });
});
