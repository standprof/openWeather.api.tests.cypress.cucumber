Feature: Open Weather
	Forecast and current weather data is accessible

Scenario: Get min and max temperature for Paris
	Given there is a city: "Paris"
	When I request the current weather for the city
	Then the response status code should be 200
	And minimum and maximum temperature should be above 0