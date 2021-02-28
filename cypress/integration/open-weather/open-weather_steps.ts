import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


let _city: string;
let _appId: string;

before(() => {
 cy.fixture('secrets').as('secrets')
 cy.get('@secrets').then((secrets) => {
     _appId = secrets.appId;
 })
})


Given('there is a city: {string}', (city) => {
    _city = city;
})

When('I request the current weather for the city', () => {
    let queryParameters = {q: _city, appid: _appId }
    cy.api({url: 'weather', qs: queryParameters}).as('res')
})

Then('minimum and maximum temperature should be above 0', () => {
    cy.get('@res').should((response) => {
        expect(response.body.main.temp_min).to.greaterThan(0)
        expect(response.body.main.temp_max).to.greaterThan(0)
    })
})