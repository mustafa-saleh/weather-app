import React from "react";
import "./WeatherDateTime.css";
import { getWeatherDate } from "../../../utils/datetime";

const WeatherDateTime = ({ description, dt, timezone }) => {
  return (
    <div className="date-time">
      <div>{description}</div>
      <div>{getWeatherDate(dt, timezone)}</div>
    </div>
  );
};

export default WeatherDateTime;
