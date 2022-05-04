Feature: Buy a product

Scenario: The user is registered in the site
  Given An registered user
  When I select a certain product and add it to the shopping cart and click in the buy product button and fill the payment form
  Then The product should be add to the my shipments menu