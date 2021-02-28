import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('the response status code should be {int}', (statusCode) => {
    cy.get('@res').should((response) => {
        expect(response.status).to.equal(statusCode)
    })
})