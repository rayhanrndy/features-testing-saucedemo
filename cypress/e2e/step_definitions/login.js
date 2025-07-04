const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('I open the login page', () => {
    cy.visit("/");
})
When('I enter username {string} and password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
})
When('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
})
Then('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
})
Then('I should see an error message {string}', (errorMessage) => {
    cy.get('[data-test="error"]').should('contain', errorMessage);
})
When('Input username {string} and leave password empty', (username) => {
    cy.get('[data-test="username"]').type(username);
})
When('Leave username empty, input password {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
})
When('Input username {string} and password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
})