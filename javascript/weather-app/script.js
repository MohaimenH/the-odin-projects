let API_KEY;

fetch("apikey.json")
    .then((res) => res.json())
    .then((data) => {
        API_KEY = data.WEATHER_API_KEY;
    });

const weatherInfo = document.querySelector(".weather-info");

const currentWeather = async (place) => {
    // weatherInfo.textContent = "Loading...";

    const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${String(
            place
        )}&appid=${API_KEY}&units=metric`
    );

    return await data.json();
};

const placeInput = document.querySelector(".info-form");
const mainHeader = document.querySelector(".main-header");
const weatherImage = document.querySelector(".weather-image");

const temperature = document.querySelector(".temperature");
const feels = document.querySelector(".feels");

placeInput.addEventListener("submit", async (e) => {
    e.preventDefault();

    let place = document.querySelector(".place").value;
    let weatherData = await currentWeather(
        document.querySelector(".place").value
    );

    if (Number(weatherData.cod) == 404) {
        weatherImage.src = "";
        temperature.textContent = String(weatherData.message);
        feels.textContent = "";
        return;
    }

    weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    temperature.textContent = `${weatherData.main.temp}° C`;
    feels.textContent = weatherData.weather[0].main;

    // weatherInfo.textContent = JSON.stringify(weatherData);

    // weatherInfo.textContent = "Loaded.";

    mainHeader.textContent = `${place}'s Weather`;
});
