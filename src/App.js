import React from "react";
import "./styles.css";

import "./Weather.css";

export default function App() {
  return (
    <div className="container">
      <div className="text-right p-5">
        <form id="search-form">
          <input type="search" id="city-input" placeholder="Enter a City" />
          <button type="button" className="text-right" id="button-search">
            <span role="img" aria-label="looking-glass">
              {" "}
              🔍{" "}
            </span>{" "}
            Search City
          </button>
        </form>
      </div>

      <div className="container">
        <div className="border p-5" id="sky">
          <h1 id="city">New York</h1>
          <span className="Today" role="img">
            Today{" "}
            <span role="img" aria-label="looking-glass">
              {" "}
              ☀️{" "}
            </span>
            <span id="temperature"> 71 </span>
            <a href="/" id="celsius-link">
              {" "}
              °C{" "}
            </a>
            |
            <a href="/" id="fahrenheit-link">
              °F{" "}
            </a>
          </span>

          <div className="date">
            <div className="text-right" id="day">
              <h3>Wednesday July 1, 2020</h3>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/SAC-CS112-Selvidge-Natasha/my-Weather-project"
            rel="noopener norefferrer"
            className="my-git"
          >
            Open source code by Natasha Selvidge
          </a>
        </footer>
      </div>
    </div>
  );
}
