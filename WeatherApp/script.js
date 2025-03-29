const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');
const errorMessage = document.getElementById('error-message');

// API Key (Replace with your actual OpenWeather API Key)
const API_KEY = "YOUR_API_KEY";

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name!";
        weatherDisplay.textContent = "";
        return;
    }

    fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found. Please enter a valid city name.");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        errorMessage.textContent = error.message;
        weatherDisplay.textContent = "";
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;

    weatherDisplay.textContent = `Weather in ${name}: ${main.temp}°C, ${weather[0].description}`;
    errorMessage.textContent = ""; // Clear error message if any
}
