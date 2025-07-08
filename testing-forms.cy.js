import '../support/commands'

describe('JotForm Registration From Test', ()=> {

    beforeEach(() => {
        cy.visit('https://www.jotform.com/build/250366619178566?s=templates#preview')
        cy.contains('New Customer Registration Form').should('be.visible')
    })

    it('should fill out the form and submit', ()=> {
        //Arrange
        

        //Act
        cy.get('#first_3').type('John')
        cy.get('#last_3').type('Doe')

        //Assert
        cy.get('#first_3').should('have.value', 'John')
        cy.get('#last_3').should('have.value', 'Doe')
        cy.get('#input_25').click()

    })


    it('validates on the error message', () => {
        cy.get('#input_25').click()
        cy.get('.error-navigation-message').should('contain','This field is required.')
    })

    it('validates on the error message appears for an invalid email address', () => {
        cy.get('#input_6').type('email.com')
        cy.get('#input_25').click()
        cy.get('.error-navigation-message').should('contain','Enter a valid e-mail address')
    })

    it('validates on the error message appears for an invalid phone number', () => {
        cy.get('#input_5_full').type('777')
        cy.get('#input_25').click()
        cy.get('.error-navigation-message').should('contain','Field value must fill mask.')
    })

    it.only('successfully submits the first, last name and phone number', ()=> {
        cy.fillForm('John', 'Doe', '1234567891')
        cy.get('#input_25').click()
        cy.origin('submit.jotform.com', () => {
            cy.get('p.thankyou-sub-text.ty-text').should('be.visible').contains('Your submission has been received.')
        })
    })
})
