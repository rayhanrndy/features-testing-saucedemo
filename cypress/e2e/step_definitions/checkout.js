const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('User has logged in with username {string} and password {string}, and the item {string} in the cart', (username, password, itemName) => {
    cy.visit("/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('contain', itemName);
})
When('I click the checkout button', () => {
    cy.get('[data-test="checkout"]').click();
})
And('I enter first name {string} , last name {string} and postal code {string}', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
})
And('I click the continue button', () => {
    cy.get('[data-test="continue"]').click();
})
Then('I should be redirected to the overview page', () => {
    cy.url().should('include', '/checkout-step-two.html');
})
And('I click the finish button', () => {
    cy.get('[data-test="finish"]').click();
})
And('I should be redirected to the checkout complete page', () => {
    cy.url().should('include', '/checkout-complete.html');
})
And('I click the checkout button', () => {
    cy.get('[data-test="checkout"]').click();
})
When('I leave first name blank and enter last name {string} and postal code {string}', (lastName, postalCode) => {
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
})
Then('I should see the error message {string}', (errorMessage) => {
    cy.get('[data-test="error"]').should('contain', errorMessage);
})
When('I leave first name {string} and enter last name {string} and leave the postal code', (firstName, lastName) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
})
Given('User has logged in with username {string} and password {string}', (username, password) => {
    cy.visit("/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
})
When('Add the item "Sauce Labs Backpack" and "Sauce Labs Bike Light" in the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
})
Then('Summary total price', () => {
    let subtotal, tax, total;

    cy.get('[data-test="subtotal-label"]').invoke('text').then((text) => {
        subtotal = parseFloat(text.replace('Item total: $', '').trim());
    });

    cy.get('[data-test="tax-label"]').invoke('text').then((text) => {
        tax = parseFloat(text.replace('Tax: $', '').trim());
    });

    cy.get('[data-test="total-label"]').invoke('text').then((text) => {
        total = parseFloat(text.replace('Total: $', '').trim());

        // Validate the calculation
        expect(total).to.eq(subtotal + tax);
    });
})
When('I want to cancel the checkout process', () => {
    cy.get('[data-test="cancel"]').click();
})
Then('I should be redirected back to cart page', () => {
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item"]').should('exist');
})