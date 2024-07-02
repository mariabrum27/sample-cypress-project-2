/// <reference types="Cypress" />
///Define the test cases for the login process
context('successful login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  });
  describe('validate that the user is able to login by entering the correct credentials', () => {
    it('', () => {
      //verify the username field
      cy.get('#user-name').should('exist')
      cy.get('#user-name').type('standard_user')

      //verify the password field
      cy.get('#password').should('exist')
      cy.get('#password').type('secret_sauce')

      //verify the Login button is present
      cy.get('#login-button').should('be.visible')
      cy.get('#login-button').click()

    });

  });



})