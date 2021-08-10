const currentWeather = async (place) => {
    const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${String(
            place
        )}&appid=REDACTED`
    );
};
