const apiKey = '8457d28bb6f318afef1f5639617115a8'; // Pakeiskite su savo OpenWeatherMap API raktu

document.addEventListener('DOMContentLoaded', () => {
    const addForecastBtn = document.getElementById('addForecastBtn');
    const forecastModal = document.getElementById('forecastModal');
    const modalClose = document.querySelector('.modal-close');
    const saveForecastBtn = document.getElementById('saveForecastBtn');
    const forecastTableBody = document.querySelector('#forecastTable tbody');

    addForecastBtn.addEventListener('click', () => {
        forecastModal.classList.add('is-active');
    });

    modalClose.addEventListener('click', () => {
        forecastModal.classList.remove('is-active');
    });

    saveForecastBtn.addEventListener('click', async () => {
        const cityName = document.getElementById('cityName').value;
        const postalCode = document.getElementById('postalCode').value;
        const coordinates = document.getElementById('coordinates').value;

        let query = '';
        if (cityName) {
            query = `q=${cityName}`;
        } else if (postalCode) {
            query = `zip=${postalCode}`;
        } else if (coordinates) {
            const [lat, lon] = coordinates.split(',');
            query = `lat=${lat}&lon=${lon}`;
        }

        if (query) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`);
                const data = response.data;

                const forecast = {
                    cityName: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    pressure: data.main.pressure,
                    id: Date.now()
                };

                saveForecast(forecast);
                addForecastToTable(forecast);
                forecastModal.classList.remove('is-active');
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    });

    function saveForecast(forecast) {
        const forecasts = getForecasts();
        forecasts.push(forecast);
        localStorage.setItem('forecasts', JSON.stringify(forecasts));
    }

    function getForecasts() {
        return JSON.parse(localStorage.getItem('forecasts')) || [];
    }

    function addForecastToTable(forecast) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${forecast.cityName}</td>
            <td>${forecast.country}</td>
            <td>${forecast.temperature}°C</td>
            <td>${forecast.humidity}%</td>
            <td>${forecast.windSpeed} m/s</td>
            <td>${forecast.pressure} hPa</td>
            <td><button class="button is-danger is-small" onclick="removeForecast(${forecast.id})">Pašalinti</button></td>
        `;

        forecastTableBody.appendChild(row);
    }

    window.removeForecast = function(id) {
        const forecasts = getForecasts();
        const updatedForecasts = forecasts.filter(forecast => forecast.id !== id);
        localStorage.setItem('forecasts', JSON.stringify(updatedForecasts));
        renderForecasts();
    };

    function renderForecasts() {
        forecastTableBody.innerHTML = '';
        const forecasts = getForecasts();
        forecasts.forEach(forecast => addForecastToTable(forecast));
    }

    renderForecasts();
});