const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    weather.innerText = data.weather[0].main;
  })
}

const onGeoError = (err) => {
  console.log(`Error ${err}`)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);