import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" defaultCountry="US" />
      <footer>
        <a
          href="https://github.com/NatashaSelvidge/react-weather-app"
          target="_blank"
          className="my-git"
          rel="noopener noreferrer"
        >
          Open source code on GitHub by Natasha Selvidge
        </a>
      </footer>
    </div>
  );
}
