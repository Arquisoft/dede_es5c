Feature: Login a user to the application
Scenario: The user is registered in the application
Given A registered user
  When I log in to my pod
  Then I am redirected to home and then i can see the logout button
