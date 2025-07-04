const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('User is logged in with username {string} and password {string}', (username, password) => {
    cy.visit("/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
})
When('I add the item {string} to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})
When('I click the cart icon', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
})
Then('I redirected to the cart page', () => {
    cy.url().should('include', '/cart.html');
})
And('I should see the item {string} in the cart', (itemName) => {
    cy.get('.cart_item').should('contain', itemName);
})
When("I click the remove button for {string}", () => {
    cy.get('[data-test^="remove-"]').first().click();
});

Then("I should see the cart is empty", () => {
    cy.get(".cart_item").should("not.exist");
})
When('Add "Sauce Labs Backpack" and "Sauce Labs Bike Light"', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
})
Then('I should see both products in the cart', () => {
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    cy.get('.cart_item').should('contain', 'Sauce Labs Bike Light');
})
And('Remove "Sauce Labs Backpack"', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
})
Then('I should see only remaining product stays in cart', () => {
    cy.get('.cart_item').should('contain', 'Sauce Labs Bike Light');
})
When('Add 3 product from the inventory', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
})
Then('verify cart icon shows 3', () => {
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '3');
})