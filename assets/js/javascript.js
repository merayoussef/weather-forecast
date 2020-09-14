var inputCity = document.querySelector("form-input");


var getCityInput = function (cityName) {
    var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            displayCurrentWeather(data);
        })
        .catch(function () {
            // catch any errors
        })

}

getCityInput("Nashville");

var displayCurrentWeather = function (degrees) {
    var fahrenheit = Math.round(((parseFloat(degrees.main.temp) - 273.15) * 1.8) + 32);
    var date = moment().format('L');

    document.getElementById('location').innerHTML = degrees.name;
    document.getElementById('date').innerHTML = "(" + date + ")" ;
    document.getElementById('temp').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('humidity').innerHTML = "Humidity: " + degrees.main.humidity + '%';
    document.getElementById('wind').innerHTML = "Wind Speed: " + degrees.wind.speed + " MPH";

}

var uvIndexInfo = function () {
    var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('http://api.openweathermap.org/data/2.5/uvi?' + '&appid=' + apiKey + '&lat=36.7' + '&lon=-86.78')
        .then(function (response) {
            return response.json()
        })
        .then(function (index) {
            uvIndex(index);
        })
        .catch(function () {
            // catch any errors
        })
}
uvIndexInfo()

var uvIndex = function (index) {
    document.getElementById('uv-index').innerHTML = "UV Index: " + index.value;
}



var fiveDayForecast = function () {
    var apiKey = 'ef81a5dadc206fb285c8563fe1675b51';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + 'Nashville' + '&appid=' + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            display5DayForecast(data);
        })
        .catch(function () {
            // catch any errors
        })

}
fiveDayForecast()

var display5DayForecast = function (data) {
    var fahrenheit = Math.round(((parseFloat(data.list[0].main.temp) - 273.15) * 1.8) + 32)

    document.getElementById('five-day-date-1').innerHTML = moment().add(1, 'days').format("L");  
    document.getElementById('five-day-icon-1').innerHTML = data.list[0].weather[0].icon;
    document.getElementById('five-day-temp-1').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('five-day-hum-1').innerHTML = "Humidity: " + data.list[0].main.humidity + "%";

    document.getElementById('five-day-date-2').innerHTML =  moment().add(2, 'days').format("L");
    document.getElementById('five-day-icon-2').innerHTML = data.list[7].weather[0].icon;
    document.getElementById('five-day-temp-2').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('five-day-hum-2').innerHTML = "Humidity: " + data.list[7].main.humidity + "%";

    document.getElementById('five-day-date-3').innerHTML =  moment().add(3, 'days').format("L");
    document.getElementById('five-day-icon-3').innerHTML = data.list[15].weather[0].icon;
    document.getElementById('five-day-temp-3').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('five-day-hum-3').innerHTML = "Humidity: " + data.list[15].main.humidity + "%";


    document.getElementById('five-day-date-4').innerHTML =  moment().add(4, 'days').format("L");
    document.getElementById('five-day-icon-4').innerHTML = data.list[23].weather[0].icon;
    document.getElementById('five-day-temp-4').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('five-day-hum-4').innerHTML = "Humidity: " + data.list[23].main.humidity + "%";

    document.getElementById('five-day-date-5').innerHTML =  moment().add(5, 'days').format("L");
    document.getElementById('five-day-icon-5').innerHTML = data.list[31].weather[0].icon;
    document.getElementById('five-day-temp-5').innerHTML = "Tempature: " + fahrenheit + '&deg;' + "F";
    document.getElementById('five-day-hum-5').innerHTML = "Humidity: " + data.list[31].main.humidity + "%";
}

var searchedCity = function () {
    console.log(value)
    document.getElementById("btn").addEventListener ("submit", getCityInput);
    var value = inputCity.value

    localStorage.setItem(value)

}

