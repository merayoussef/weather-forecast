var getCityInput = function(cityName) {
    var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + apiKey)
    .then(function(response){
        return response.json() })
        .then(function(data) {
            displayCurrentWeather(data);
          })
          .catch(function() {
            // catch any errors
          })

}

window.onload = function() {
    getCityInput("Nashville");
        }

        // add instead of Nashville
var search = document.querySelector('user-input')

var displayCurrentWeather = function(degrees) {
    var fahrenheit = Math.round(((parseFloat(degrees.main.temp)-273.15)*1.8)+32);
    
    document.getElementById('location').innerHTML = degrees.name;
    document.getElementById('temp').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('humidity').innerHTML = "Humidity: " + degrees.main.humidity + '%';
    document.getElementById('wind').innerHTML = "Wind Speed: " + degrees.wind.speed + " MPH";
   
}

var uvIndexInfo = function () {
    var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('http://api.openweathermap.org/data/2.5/uvi?' + '&appid=' + apiKey + '&lat=36.7' + '&lon=-86.78')
    .then(function(response){
    return response.json() })
    .then(function() {
        uvIndex(data);
      })
      .catch(function() {
        // catch any errors
      })
}
var uvIndex = function() {
    document.getElementById('uv-index').innerHTML = "UV Index: " + value;
}


var fiveDayForecast = function() {
var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + 'Nashville' + '&appid=' + apiKey)
    .then(function(response){
        return response.json() })
        .then(function(data) {
            display5DayForecast(data);
          })
          .catch(function() {
            // catch any errors
          })

}
fiveDayForecast()

var display5DayForecast = function() {
    var fahrenheit = Math.round(((parseFloat(list.main.temp)-273.15)*1.8)+32)
    document.getElementById('date-5').innerHTML = list.dt;
    document.getElementById('icon-5').innerHTML = weather.icon;
    document.getElementById('temp-5').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
	document.getElementById('hum-5').innerHTML = "Humidity: " + list.main.humidity;
console.log('data-5')
}

