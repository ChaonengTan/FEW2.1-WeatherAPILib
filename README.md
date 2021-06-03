![GitHub repo size](https://img.shields.io/github/repo-size/ChaonengTan/FEW2.1-WeatherAPILib)![GitHub issues](https://img.shields.io/github/issues-raw/ChaonengTan/FEW2.1-WeatherAPILib)

NPM: https://www.npmjs.com/package/@chaonengtan/weather-api-lib

A short little weather api lib for https://openweathermap.org/ API.
Contains instant call functions for obtaining weather using city, geo-location, and city perameters.
Returned information can be unformatted or formatted depending on usage getWeather[perameter]/obtainWeather[perameter]
ie.
getWeatherZip(apiKey, zip, 'imperial') // returns json data from openweathermap API
    .then((data) => { // does something with the data
        // something cool happens
    })
