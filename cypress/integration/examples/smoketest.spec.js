/// <reference types="Cypress" />

// Define the test suite for the smoke test
context('smoketest', () => {
  beforeEach(() => {
    // Visit the Sauce Demo website before each test
    cy.visit('https://www.saucedemo.com/')
  })

  // Define the test case to validate successful login
  describe('Validate successful login', () => {
    it('verify user is able to login with valid credentials', () => {

      // Type the username 'visual_user' in the username field
      cy.get('#user-name').type('visual_user')
      // Type the password 'secret_sauce' in the password field
      cy.get('#password').type('secret_sauce')
      // Click on the login button
      cy.get('#login-button').click()

      // Check if the URL includes 'inventory.html' after successful login
      cy.url().should('include', 'inventory.html');

      // Verify that there is an expected element on the main page after successful login
      cy.get('#react-burger-menu-btn').click()
      cy.get('#inventory_sidebar_link').should('have.text', 'All Items') // Check for 'All Items' text
      cy.get('#about_sidebar_link').should('have.text', 'About') // Check for 'About' text
      cy.get('#logout_sidebar_link').should('have.text', 'Logout') // Check for 'Logout' text
      cy.get('#reset_sidebar_link').should('have.text', 'Reset App State') // Check for 'Reset App State' text

    })

  })
  describe('', () => {
    beforeEach(() => {
      cy.get('#user-name').type('visual_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
    });
    it('verify there is a set of products with the details (image, Name, description, price', () => {

      // Verify the title of the product should have a hyperlink to visualice the product deatails
      cy.get('#item_4_title_link > div').should('exist')
      cy.get('#item_4_title_link > div').should('have.text', 'Sauce Labs Backpack')
      cy.get('#item_4_title_link > div').click()
      cy.get('#back-to-products').should('exist')
      cy.get('#back-to-products').should('have.text', 'Back to products')
      cy.get('#back-to-products').click()

      // Verify the product description 
      cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div').should('exist')
      cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')

      // Verify the product image
      cy.get('#item_4_img_link > img').should('exist')

      // Verify the product price
      cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div').should('exist')
      cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div').should('contain.text', '$')

      // Verify the Add to cart option
      cy.get('#add-to-cart-sauce-labs-backpack').should('exist')
      cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart')
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#shopping_cart_container > a').should('exist')
      cy.get('#shopping_cart_container > a > span').should('have.text', '1')
      cy.get('#remove-sauce-labs-backpack').should('exist')
      cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
      cy.get('#remove-sauce-labs-backpack').click()
      cy.get('#shopping_cart_container > a').should('exist')
      cy.get('#shopping_cart_container > a > span').should('not.exist')

    })
  });


  // Define the test case to validate failed login
  describe('Validate failed login', () => {
    it('verify user is unable to login by using incorrect credentials', () => {

      // Type the username 'visual_user' in the username field
      cy.get('#user-name').type('visual_user')
      // Type the password 'secret_sauce' in the password field
      cy.get('#password').type('invalid_password')
      // Click on the login button
      cy.get('#login-button').click()

      // Check if the icon error for incorrect credentials is displayed on input
      cy.get('#login_button_container > div > form > div:nth-child(1) > svg').should('exist')
      cy.get('#login_button_container > div > form > div:nth-child(2) > svg').should('exist')

      // Verify the error message text for incorrect credentials
      cy.get('#login_button_container > div > form > div.error-message-container.error').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })
  })


})