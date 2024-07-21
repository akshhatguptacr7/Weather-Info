async function getWeather() {
    debugger
    const city = document.getElementById('city').value;
    const apiKey = '94b5bb09ed9e65a90331c9a3d46bf8a3'; // Replace with your OpenWeatherMap API key
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${new Date().toLocaleDateString()}</p>
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].main}</p>
                <p>Min: ${data.main.temp_min}°C / Max: ${data.main.temp_max}°C</p>
            `;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
