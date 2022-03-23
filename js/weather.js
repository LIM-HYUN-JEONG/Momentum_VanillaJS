const API_KEY = "c4d1004d1bd4f0b5d0cd07489004dca9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const city = document.getElementById("city");
  const weather = document.getElementById("weather");
  const temp = document.getElementById("temp");

  const a = fetch(url)
    .then((weather) => weather.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = ` ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you");

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
