const apiKey = "674e02b12c6ad41b225410e8c6be6399"; // 🔑 Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherInfo");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const { name, main, weather, sys } = data;

    weatherDiv.innerHTML = `
      <h2>${name}, ${sys.country}</h2>
      <p>${weather[0].main} - ${weather[0].description}</p>
      <p>🌡️ Temp: ${main.temp}°C</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🔻 Min: ${main.temp_min}°C | 🔺 Max: ${main.temp_max}°C</p>
    `;
  } catch (err) {
    weatherDiv.innerHTML = "❌ Could not fetch weather. Try again.";
  }
}
