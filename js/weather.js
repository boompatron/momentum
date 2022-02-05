const API_KEY = "fd757df309e20a036885a50df1285371";
function geoSuccessCallBack(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const City = document.querySelector('#weather span:first-child');
        const Weather = document.querySelector('#weather span:last-child');
        const cityName = data.name;
        const cityWeather = data.weather[0].main;
        City.innerText = cityName;
        Weather.innerText = cityWeather;
        console.log(cityName, cityWeather);
    });
    console.log(url);
}
function geoFailCallBack(){
    alert("Location Cannot Found");
}
navigator.geolocation.getCurrentPosition(geoSuccessCallBack, geoFailCallBack);