const city = document.querySelector('#city');
const weather = document.querySelector('#description');
const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
// const description = document.querySelector('#description');
const button = document.querySelector('#getWeather');

console.log("Hello from @rahul21-7");

// const URL = { please use a valid URL here, Ive removed mine for privacy reasons };

// button.addEventListener('click', () => {
//     getWeather();
// });

const getWeather = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const countryName = data.name;
    city.textContent += " : " + countryName;
    const hum = data.main.humidity;
    humidity.textContent += " : " + hum;
    const temperatureVal = data.main.temp;
    temperature.textContent += " : " + temperatureVal;
    const winds = data.wind.speed;
    wind.textContent += " : " + winds;
    const weatherVal = data.weather[0].description;
    weather.textContent += " : " + weatherVal;
}

// getWeather();

