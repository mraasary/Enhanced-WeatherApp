// Weather condition to image mapping
const weatherImages = {
    'sunny': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'clear': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'cloudy': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'overcast': 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'rain': 'https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80',
    'snow': 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'fog': 'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'storm': 'https://images.unsplash.com/photo-1595435934248-9a725ef58f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'default': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
};

function getWeatherImage(condition) {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
        return weatherImages.sunny;
    } else if (lowerCondition.includes('cloud')) {
        return weatherImages.cloudy;
    } else if (lowerCondition.includes('overcast')) {
        return weatherImages.overcast;
    } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle') || lowerCondition.includes('shower')) {
        return weatherImages.rain;
    } else if (lowerCondition.includes('snow') || lowerCondition.includes('sleet') || lowerCondition.includes('ice')) {
        return weatherImages.snow;
    } else if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) {
        return weatherImages.fog;
    } else if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
        return weatherImages.storm;
    } else {
        return weatherImages.default;
    }
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => errorDiv.classList.add('hidden'), 5000);
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('date-time').textContent = now.toLocaleDateString('en-US', options);
}

async function getLocationWeather() {
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser");
        return;
    }
    
    showElement('loading');
    hideElement('current-weather');
    hideElement('forecast');
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            try {
                const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=d7cadfbb7d2043bc81542310253108&q=${lat},${lon}&days=5&aqi=no&alerts=no`;
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error('Unable to fetch weather data for your location');
                }
                
                const data = await response.json();
                displayWeatherData(data);
            } catch (error) {
                hideElement('loading');
                showError(error.message);
            }
        },
        (error) => {
            hideElement('loading');
            showError("Unable to retrieve your location");
        }
    );
}

async function getWeather() {
    const location = document.getElementById('location').value.trim();
    
    showElement('loading');
    hideElement('current-weather');
    hideElement('forecast');
    hideElement('error-message');

    if (!location) {
        hideElement('loading');
        showError("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=d7cadfbb7d2043bc81542310253108&q=${encodeURIComponent(location)}&days=5&aqi=no&alerts=no`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found or API error');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        hideElement('loading');
        showError(error.message);
    }
}

function displayWeatherData(data) {
    // Update background based on weather condition
    const weatherImage = getWeatherImage(data.current.condition.text);
    document.body.style.backgroundImage = `url('${weatherImage}')`;
    
    // Update current weather
    document.getElementById('city-name').textContent = `${data.location.name}, ${data.location.country}`;
    updateDateTime();
    document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
    document.getElementById('weather-condition').textContent = data.current.condition.text;
    document.getElementById('weather-icon').innerHTML = `<img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" class="w-32 h-32">`;
    document.getElementById('feels-like').textContent = `${data.current.feelslike_c}°C`;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('wind-speed').textContent = `${data.current.wind_kph} km/h`;
    document.getElementById('pressure').textContent = `${data.current.pressure_mb} hPa`;
    
    // Update forecast
    const forecastItems = document.getElementById('forecast-items');
    forecastItems.innerHTML = '';
    
    data.forecast.forecastday.forEach(day => {
        const date = new Date(day.date);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        
        forecastItems.innerHTML += `
            <div class="forecast-item bg-white bg-opacity-10 p-4 rounded-xl text-center">
                <p class="font-semibold">${formattedDate}</p>
                <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" class="w-16 h-16 mx-auto">
                <p class="my-2">${day.day.condition.text}</p>
                <p class="text-xl font-bold">${day.day.avgtemp_c}°C</p>
                <div class="flex justify-center mt-2 text-sm">
                    <span class="mr-3"><i class="fas fa-tint mr-1"></i> ${day.day.avghumidity}%</span>
                    <span><i class="fas fa-wind mr-1"></i> ${day.day.maxwind_kph} km/h</span>
                </div>
            </div>
        `;
    });
    
    // Show the weather sections
    hideElement('loading');
    showElement('current-weather');
    showElement('forecast');
    
    // Add fade-in effect
    document.getElementById('current-weather').classList.add('fade-in');
    document.getElementById('forecast').classList.add('fade-in');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Allow pressing Enter to trigger search
    document.getElementById('location').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') getWeather();
    });
    
    // Initialize with a default city
    document.getElementById('location').value = 'London';
    getWeather();
    setInterval(updateDateTime, 60000); // Update time every minute
});
