Feature: Add a product to the shopping cart

Scenario: The user is not registered in the site, but the user can add a product to the shopping cart
  Given An unregistered user
  When I select a certain product and add it to the shopping cart
  Then The product should be in the shopping cart