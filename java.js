async function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "7b63bfde0a22f2c2aa3861a757c86f3f"; // 🔁 Replace this with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found or API error");
  
      const data = await response.json();
  
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
      `;
  
      document.getElementById("weather-result").innerHTML = weather;
  
    } catch (error) {
      document.getElementById("weather-result").innerHTML = `<p style="color:red;">${error.message}</p>`;
      console.error("Error:", error);
    }
  }
  