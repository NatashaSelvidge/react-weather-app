import React from "react";
import "./Weather.css";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "Newport",
    temperature: "70",
    date: "Wednesday July 1, 2020",
    emoji: "☀️",
  };
  return (
    <div className="Weather">
      <div className="text-right p-5">
        <form className="search-form">
          <input
            type="search"
            className="city-input"
            placeholder="Enter a City"
          />
          <button type="button" className="text-right button-search">
            <span role="img" aria-label="looking-glass">
              🔍
            </span>
            Search
          </button>
        </form>
      </div>

      <div className="container">
        <div className="border p-5 sky">
          <h1>{weatherData.city}</h1>
          <span className="Today">
            Today
            <span role="img" aria-label="sun-emoji">
              {weatherData.emoji}
            </span>
            <span className="temperature"> {weatherData.temperature} </span>
            <span className="celsius"> °C </span>|
            <span className="fahrenheit"> °F </span>
          </span>

          <div className="date">
            <div className="text-right day">
              <h3>{weatherData.date}</h3>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/SAC-CS112-Selvidge-Natasha/my-Weather-project"
            target="_blank"
            className="my-git"
            rel="noopener noreferrer"
          >
            Open source code by Natasha Selvidge
          </a>
        </footer>
      </div>
    </div>
  );
}
