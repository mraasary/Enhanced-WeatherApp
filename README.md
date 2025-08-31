# 🌤️ Enhanced Weather App

A modern, responsive weather application that provides real-time weather information and 5-day forecasts for any location worldwide. Built with vanilla JavaScript, HTML5, and CSS3, featuring a beautiful glassmorphism design and dynamic background images.

![Weather App Screenshot](Main%20Interface.png)

![Weather App Mobile View](Screenshot%202025-08-31%20122606.png)

## ✨ Features

- **🌍 Global Weather Data**: Search for weather information in any city worldwide
- **📍 Current Location**: Get weather data for your current location using GPS
- **📅 5-Day Forecast**: Detailed weather predictions for the next 5 days
- **🎨 Dynamic Backgrounds**: Background images change based on weather conditions
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Live weather data with automatic time updates
- **🎯 Glassmorphism UI**: Modern glass-like interface with blur effects
- **🌡️ Detailed Metrics**: Temperature, humidity, wind speed, pressure, and "feels like" temperature

## 🚀 Live Demo

[View Live Demo](https://aasaryweatherapp.netlify.app/) *(https://aasaryweatherapp.netlify.app/)*

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN) + Custom CSS
- **Icons**: Font Awesome 6.4.0
- **Weather API**: WeatherAPI.com
- **Background Images**: Unsplash
- **Architecture**: Modular file structure (HTML, CSS, JS separated)

## 📋 Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for API calls
- Location permissions (for current location feature)

## 🚀 Getting Started

### Option 1: Direct Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start searching for weather information!

### Option 2: Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. The project structure:
   ```
   weather-app/
   ├── index.html          # Main HTML file
   ├── styles.css          # Custom CSS styles
   ├── script.js           # JavaScript functionality
   ├── README.md           # Project documentation
   └── screenshots/        # App screenshots
   ```

3. For local development, you can use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

4. Navigate to `http://localhost:8000` in your browser

## 🔧 Configuration

### API Key Setup

The app currently uses a demo API key. For production use:

1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your free API key
3. Replace the API key in `script.js`:
   ```javascript
   // In script.js, update both API calls:
   const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=5&aqi=no&alerts=no`;
   ```

## 📱 Usage

1. **Search by City**: Enter any city name in the search box and click "Search"
2. **Use Current Location**: Click the location arrow button to get weather for your current position
3. **View Details**: See current weather conditions, temperature, humidity, wind speed, and pressure
4. **Check Forecast**: Scroll down to view the 5-day weather forecast
5. **Responsive Design**: The app adapts to different screen sizes automatically

## 🎨 Design Features

- **Glassmorphism Effect**: Semi-transparent cards with backdrop blur
- **Dynamic Backgrounds**: Background images change based on weather conditions
- **Smooth Animations**: Fade-in effects and hover animations
- **Weather Icons**: Official weather condition icons from WeatherAPI
- **Color-coded Elements**: Intuitive color scheme for different weather conditions
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Custom Styling**: Enhanced visual effects with custom CSS

## 📊 API Integration

The app integrates with WeatherAPI.com to provide:

- Current weather conditions
- 5-day weather forecasts
- Location data
- Weather icons and descriptions

### File Structure
- **`index.html`**: Main HTML structure and UI components
- **`styles.css`**: Custom animations, glassmorphism effects, and responsive styles
- **`script.js`**: Weather API integration, DOM manipulation, and event handling

## 🔒 Privacy & Security

- No user data is stored locally or on servers
- Location data is only used for weather requests
- API calls are made directly from the client-side
- No personal information is collected

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aashish Chaudhary**

- GitHub: [@mraasary](https://github.com/mraasary)

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for the stunning background images

⭐ **Star this repository if you found it helpful!**


