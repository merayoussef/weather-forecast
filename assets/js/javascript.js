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
    
var displayCurrentWeather = function(degrees) {
    var celcius = Math.round(parseFloat(degrees.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(degrees.main.temp)-273.15)*1.8)+32);
    var description = degrees.weather[0].description;

    document.getElementById('description').innerHTML = degrees.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location').innerHTML = degrees.name;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
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
