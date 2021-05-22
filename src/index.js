//Current date - complete

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let currentMonth = months[now.getMonth()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0 ${currentHour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let displayDay = document.querySelector(".display-day");
displayDay.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}`;
let displayTime = document.querySelector(".display-time");
displayTime.innerHTML = `${currentHour}:${minutes}`;

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

//Display Forecast data in HTML

function displayForecast(response) {
  let forecast = response.data.daily;
  console.log(forecast);
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = ` <div class="row"> `;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        ` 
      <div class="col-2">
            <div class="forecast-date">
              <h1>${formatDay(forecastDay.dt)}</h1>
            </div>
            <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="70" />
            <div class="forecast-temperature">
              <span class="forecast-maximum"> ${Math.round(
                forecastDay.temp.max
              )}° C</span>/
              <span class="forecast-minimum"> ${Math.round(
                forecastDay.temp.min
              )}° C</span>
            </div>
      </div>
   `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  //console.log(forecastHTML);
}

//Function obtain forecast form API (OpenWeather)
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = `7fedc1d14d8eb9b728bca5549432aec4`;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
  let apiURL = `${apiEndpoint}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiURL}`).then(displayForecast);
}

//Current Weather
function showTemperature(response) {
  //console.log(response);

  let temperatureElement = document.querySelector("#current-temperature");
  let conditionsElement = document.querySelector("#current-conditions");
  let humidityElement = document.querySelector("#current-humidity");
  let windElement = document.querySelector("#current-wind");
  let realElement = document.querySelector("#real-feel");

  celciusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celciusTemperature);
  conditionsElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  realElement.innerHTML = Math.round(response.data.main.feels_like);

  let location = document.querySelector("#input-city");
  let weatherSituation = response.data.weather[0].main;
  location.innerHTML = response.data.name;

  //Call the forecast function here to obtain the lat & long data
  getForecast(response.data.coord);

  if (weatherSituation === "Clear") {
    document.querySelector("#current-conditions").innerHTML = "SUNNY";
    document.querySelector("#icon").setAttribute("src", "media/icon_sunny.svg");
  }
  if (weatherSituation === "Clouds") {
    document.querySelector("#current-conditions").innerHTML = "CLOUDY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Mist") {
    document.querySelector("#current-conditions").innerHTML = "MISTY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Smoke") {
    document.querySelector("#current-conditions").innerHTML = "SMOKEY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Haze") {
    document.querySelector("#current-conditions").innerHTML = "HAZY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Dust") {
    document.querySelector("#current-conditions").innerHTML = "DUSTY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Fog") {
    document.querySelector("#current-conditions").innerHTML = "FOGGY";
    document.querySelector("icon").setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Sand") {
    document.querySelector("#current-conditions").innerHTML = "DUSTY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Dust") {
    document.querySelector("#current-conditions").innerHTML = "DUSTY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Ash") {
    document.querySelector("#current-conditions").innerHTML = "ASHY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Squall") {
    document.querySelector("#current-conditions").innerHTML = "WINDY";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Tornado") {
    document.querySelector("#current-conditions").innerHTML = "TORNADO";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_cloudy.svg");
  }
  if (weatherSituation === "Snow") {
    document.querySelector("#current-conditions").innerHTML = "SNOWY";
    document.querySelector("#icon").setAttribute("src", "media/icon_snowy.svg");
  }
  if (weatherSituation === "Rain") {
    document.querySelector("#current-conditions").innerHTML = "RAINY";
    document.querySelector("#icon").setAttribute("src", "media/icon_rainy.svg");
  }
  if (weatherSituation === "Drizzle") {
    document.querySelector("#current-conditions").innerHTML = "DRIZZLY";
    document.querySelector("#icon").setAttribute("src", "media/icon_rainy.svg");
  }

  if (weatherSituation === "Thunderstorm") {
    document.querySelector("#current-conditions").innerHTML = "THUNDERSTORM";
    document
      .querySelector("#icon")
      .setAttribute("src", "media/icon_thunder.svg");
  }
}

//Function city search submit form
function handleSubmit(event) {
  event.preventDefault();
  let unit = `metric`;
  let city = document.querySelector("#city").value;
  searchCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function searchCity(city) {
  let unit = "metric";
  let apiKey = `7fedc1d14d8eb9b728bca5549432aec4`;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiURL = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiURL}`).then(showTemperature);
}

//Functio current position
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = `7fedc1d14d8eb9b728bca5549432aec4`;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiURL = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemperature);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

//F|C converter function
function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;
let fahrenheitTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelcius);

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getPosition);

//
searchCity("Gent");
