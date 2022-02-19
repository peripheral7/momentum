const API_KEY = "902a35f5fa11d28d7f6f78a9fe1b691d";

function onGeoWork(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:nth-child(1)")
      const city = document.querySelector("#weather span:nth-child(3)");

      city.innerText = data.name;
      temperature.innerText = `${Math.round(data.main.temp)} \xB0C`;
      weather.innerText = `${data.weather[0].main}`


    }); 
}
function onGeoError() {
  alert("Can't locate you.");
}

navigator.geolocation.getCurrentPosition(onGeoWork, onGeoError); //성공 오류시 실행할 함수
