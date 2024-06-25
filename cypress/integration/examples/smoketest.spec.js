/// <reference types="Cypress" />
context('smoketest', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })


  describe('Validate successful login', () => {
    it('verify user is able to login with valid credentials', () => {

      cy.get('#user-name').type('visual_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()

    })
  })



})
