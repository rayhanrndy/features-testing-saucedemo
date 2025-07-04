Feature: Login Functionality

    Scenario: Successful login with valid credentials
        Given I open the login page
        When I enter username "standard_user" and password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page

    Scenario: Unsuccessful login with invalid credentials
        Given I open the login page
        When I enter username "invalid_user" and password "invalid_password"
        And I click the login button
        Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
    
    Scenario: Login with blank password
        Given I open the login page
        When Input username "standard_user" and leave password empty
        And I click the login button
        Then I should see an error message "Epic sadface: Password is required"

    Scenario: Login with blank username
        Given I open the login page
        When Leave username empty, input password "secret_sauce"
        And I click the login button
        Then I should see an error message "Epic sadface: Username is required"
    
    Scenario: Login with user locked out
        Given I open the login page
        When Input username "locked_out_user" and password "secret_sauce"
        And I click the login button
        Then I should see an error message "Epic sadface: Sorry, this user has been locked out."