let API_KEY;

fetch("apikey.json")
    .then((res) => res.json())
    .then((data) => {
        API_KEY = data.WEATHER_API_KEY;
    });

const weatherInfo = document.querySelector(".weather-info");

const currentWeather = async (place) => {
    weatherInfo.textContent = "Loading...";

    try {
        const data = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${String(
                place
            )}&appid=${API_KEY}&units=metric`
        );

        return await data.json();
    } catch {
        return 0;
    }
};

const placeInput = document.querySelector(".info-form");
const mainHeader = document.querySelector(".main-header");
const weatherImage = document.querySelector(".weather-image");

placeInput.addEventListener("submit", async (e) => {
    e.preventDefault();

    let place = document.querySelector(".place").value;
    // let weatherData = await currentWeather(
    //     document.querySelector(".place").value
    // );

    // if (weatherData == 0) {
    //     weatherInfo.textContent = "Error";
    //     return;
    // }

    // if (Number(weatherData.cod) == 404) {
    //     weatherInfo.textContent = String(weatherData.message);
    //     return;
    // }

    // weatherInfo.textContent = JSON.stringify(weatherData);
    // weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    weatherInfo.textContent = "Loaded.";

    mainHeader.textContent = `${place}'s Weather`;
});
