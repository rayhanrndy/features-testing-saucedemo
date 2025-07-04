Feature: Shopping Cart

  Scenario: Add item to cart
    Given User is logged in with username "standard_user" and password "secret_sauce"
    When I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    Then I redirected to the cart page
    And I should see the item "Sauce Labs Backpack" in the cart

  Scenario: Remove item from cart
    Given User is logged in with username "standard_user" and password "secret_sauce"
    When I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    And I click the remove button for "Sauce Labs Backpack"
    Then I should see the cart is empty
  
  Scenario: Add multiple products
    Given User is logged in with username "standard_user" and password "secret_sauce"
    When Add "Sauce Labs Backpack" and "Sauce Labs Bike Light"
    And I click the cart icon
    Then I should see both products in the cart
  
  Scenario: Remove one of multiple items
    Given User is logged in with username "standard_user" and password "secret_sauce"
    When Add "Sauce Labs Backpack" and "Sauce Labs Bike Light"
    And Remove "Sauce Labs Backpack"
    And I click the cart icon
    Then I should see only remaining product stays in cart
  
  Scenario: Validate cart badge count
    Given User is logged in with username "standard_user" and password "secret_sauce"
    When Add 3 product from the inventory
    Then verify cart icon shows 3