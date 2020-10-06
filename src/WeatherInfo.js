import React from "react";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="float-left">
        <WeatherIcon code={props.data.iconUrl} />
      </div>

      <WeatherTemp fahrenheit={props.data.temperature} />
      <div className="date"></div>
      <div className="text-right day">
        <h3>
          <TodaysDate date={props.data.date} />
        </h3>
      </div>
    </div>
  );
}
