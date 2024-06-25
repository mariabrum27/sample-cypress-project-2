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

})