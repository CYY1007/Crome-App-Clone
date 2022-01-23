const API_KYE = "a2fe116f4a659e0ff1ae7cdc8df0e6b3"


function onGeoOk(position)
{
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KYE}&units=metric`
    fetch(url).then(res => res.json()).
    then(data => 
    {
        const weather = document.querySelector("#weather span:last-child")
        const city = document.querySelector("#weather span:first-child")
        console.log(weather)
        city.innerText = `${data.name}`
        weather.innerText = `${data.weather[0].main} / 온도 : ${data.main.temp}`
    })
}
function onGeoError(){
    alert("Can't find you") 
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);