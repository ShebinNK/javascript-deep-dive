const apiKey = "YOUR_API_KEY"; // replace with your real key
const weatherResult = document.getElementById("weatherResult");
const getWeatherBtn = document.getElementById("getWeather");

getWeatherBtn.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    weatherResult.innerHTML = "Please enter a city.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Display result
    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = "Error: " + error.message;
  }
});
