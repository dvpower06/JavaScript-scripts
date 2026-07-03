const API_KEY = '873b8fa29410bcb35a3ef8c7bb654a5d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';


let button = document.getElementById('weather-btn');
let output = document.getElementById('weather-output');

async function getWeather(event) {

    const city = document.getElementById('city-input').value;

    if (!city) {
        alert('Please enter city name');
        console.log('function active');
        return;
    }

    try {

        const weatherResponse = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = await weatherResponse.json();

        output.innerText = weatherData.main.temp;


    } catch (error) {
        alert('failed to fetch weather :(')
    }



}


button.addEventListener('click', getWeather);