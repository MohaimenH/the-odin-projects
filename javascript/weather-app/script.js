let API_KEY;

fetch("apikey.json")
    .then((res) => res.json())
    .then((data) => {
        API_KEY = data.WEATHER_API_KEY;
    });

const currentWeather = async (place) => {
    const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${String(
            place
        )}&appid=${API_KEY}`
    );
};
