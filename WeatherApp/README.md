# Weather Fetch App (Debugged Version)

## ✅ Features:
- Fetches weather data for any valid city name.
- Displays **city name, temperature (°C), and weather description**.
- Implements **error handling** for invalid city names or API failures.
- Ensures **proper user input validation** (e.g., prevents empty submissions).

## 🔧 Fixes & Improvements:
1. **Fixed API Key Issue**: Replaced `"YOUR_API_KEY"` with a placeholder (replace with your actual OpenWeather API key).
2. **Handled Invalid City Names**: Shows a friendly error message when the city is not found.
3. **Added User Input Validation**: Prevents empty submissions and trims input.
4. **Converted Temperature to Celsius**: Added `units=metric` to API request.
5. **Used Try-Catch for Error Handling**: Handles network failures and invalid responses.

## 🚀 How It Works:
1. Enter a city name in the input field.
2. Click "Get Weather."
3. If valid, the weather details appear below.
4. If invalid, an error message is shown.

## 🛠 Technologies Used:
- **HTML** for structure.
- **CSS** for styling.
- **JavaScript (Fetch API, Async/Await, Error Handling)** for logic.

## 🌍 API Used:
- [OpenWeather API](https://api.openweathermap.org/data/2.5/weather)
