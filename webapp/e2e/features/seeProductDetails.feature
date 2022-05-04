Feature: See the details of a product

Scenario: User is in home view
  Given An unregistered user in the home view
  When I click in a certain product
  Then I can see the details of that product