Feature: Checkout Process

  Scenario: Successful checkout
    Given User has logged in with username "standard_user" and password "secret_sauce", and the item "Sauce Labs Backpack" in the cart
    When I click the checkout button
    And I enter first name "John" , last name "Doe" and postal code "12345"
    And I click the continue button
    Then I should be redirected to the overview page
    And I click the finish button
    And I should be redirected to the checkout complete page
    
  Scenario: Checkout with missing first name
    Given User has logged in with username "standard_user" and password "secret_sauce", and the item "Sauce Labs Backpack" in the cart
    And I click the checkout button
    When I leave first name blank and enter last name "Doe" and postal code "12345"
    And I click the continue button
    Then I should see an error message "Error: First Name is required"
  
  Scenario: Checkout with missing postal code
    Given User has logged in with username "standard_user" and password "secret_sauce", and the item "Sauce Labs Backpack" in the cart
    And I click the checkout button
    When I leave first name "John" and enter last name "Doe" and leave the postal code
    And I click the continue button
    Then I should see an error message "Error: Postal Code is required"

  Scenario: Verify total price with multiple items
    Given User has logged in with username "standard_user" and password "secret_sauce" 
    When Add the item "Sauce Labs Backpack" and "Sauce Labs Bike Light" in the cart
    And I click the checkout button
    And I enter first name "John" , last name "Doe" and postal code "12345"
    And I click the continue button
    Then Summary total price
  
  Scenario: Cancel checkout process
    Given User has logged in with username "standard_user" and password "secret_sauce", and the item "Sauce Labs Backpack" in the cart
    And I click the checkout button
    When I want to cancel the checkout process
    Then I should be redirected back to cart page