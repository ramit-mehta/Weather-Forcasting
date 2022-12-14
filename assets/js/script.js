const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '560f2d442amsh26ec2f1e9fc511dp117f7ajsnfa0421696fc0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    getWeather(city.value)
    e.preventDefault()
})
// Default
getWeather("Delhi")

const getWeatherObj = {
    feels_like: response.feels_like,
    humidity: response.humidity,
    max_temp: response.max_temp,
    min_temp: response.min_temp,
    temp: response.temp,
    wind_degrees: response.wind_degrees,
    wind_speed: response.wind_speed
}