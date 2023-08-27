import React, { useState } from "react";
import axios from "axios";

function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: "Saturday 26th August",
      time: "09:12",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1163/1163624.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <input
              type="search"
              placeholder="Enter Location"
              className="search-form"
            />
            <input type="submit" value="search" className="btn btn-secondary" />
          </form>
          <div className="Weather-info">
            <h2>{weatherData.city}</h2>

            <div className="row">
              <div className="col-6">
                <p>{weatherData.date}</p>
              </div>
              <div className="col-6">
                <p>{weatherData.time}</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-4">
                <h1>{Math.round(weatherData.temperature)}°C</h1>
              </div>
              <div className="col-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png"
                  alt={weatherData.description}
                />
              </div>
              <div className="col-4 description">
                <p>Cloudy</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-6">
                <span>Wind: {weatherData.wind} km/h</span>
              </div>
              <div className="col-6 mb-5">
                <span>Humidity: {weatherData.humidity}%</span>
              </div>
            </div>
          </div>

          <div className="Forecast"></div>
        </div>
      </div>
    );
  } else {
    let apiKey = `4c9b53e4f8f5eb00df5915bdca340605`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    
  }
}

export default Weather;
