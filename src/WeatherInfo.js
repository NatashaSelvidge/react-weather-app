import React from "react";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="float-left">
        <WeatherIcon code={props.data.icon} />
      </div>

      <span className="temperature">
        {" "}
        {Math.round(props.data.temperature)}{" "}
      </span>
      <span className="celsius"> °C | </span>
      <span className="fahrenheit"> °F </span>
      <div className="date">
        <div className="text-right day">
          <h3>
            <TodaysDate date={props.data.date} />
          </h3>
        </div>
      </div>
    </div>
  );
}
