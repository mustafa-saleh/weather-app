import React from "react";
import { getWeatherDateTime } from "../../../utils/datetime";
import "./WeatherDateTime.css";

const WeatherDateTime = ({ current, timezone }) => {
  return (
    <div className="date-time">
      <div>{current.weather[0].description}</div>
      <div>{getWeatherDateTime(current.dt, timezone)}</div>
    </div>
  );
};

export default WeatherDateTime;
