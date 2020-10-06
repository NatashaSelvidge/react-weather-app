import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Wednesday July 1, 2020",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a City.."
                  className="form-control"
                  autoFocus="none"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <img src={weatherData.iconUrl} alt="current weather" />
          <span className="temperature">
            {" "}
            {Math.round(weatherData.temperature)}{" "}
          </span>
          <span className="celsius"> °C | </span>
          <span className="fahrenheit"> °F </span>
          <div className="date">
            <div className="text-right day">
              <h3>{weatherData.date}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4d7c857c401c2b610599aeeadfa8b7de";
    let city = "Irvine";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
