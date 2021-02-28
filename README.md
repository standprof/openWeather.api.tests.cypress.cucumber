# openWeather.api.tests.cypress.cucumber
API tests for OpenWeather API, wiritten in Cypress, TypeScript and Cucumber

# Prepare
After you clone the repository, recover the packages needed: `npm install`.

Also you need to create the file `cypress\fixtures\secrets.json` and add the key `appId`. You can get the value for the key after registering for free on the [OpenWeatherMap web site](https://home.openweathermap.org/users/sign_up).

# Running tests via VS Code
There are a few ways to run the tests:
- Run `npx cypress open` to open Cypress. In Cypress, click on a feature file to run it. 
- Via CLI, run `npx cypress run`. The tests will run in headless mode, and the output will be to the CLI.

More details - [Cypress Command Line](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)
