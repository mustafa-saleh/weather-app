import React, { useState } from "react";
import Location from "./Location";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherDateTime from "./WeatherDateTime";
import FutureWeather from "./FutureWeather";
import DetailedForecast from "./DetailedForecast";

const Weather = ({ data }) => {
  return (
    <div className="card">
      <Location city={data.city} />
      <WeatherInfo currentWeather={data.list[0]} />
      <WeatherDateTime />
      <FutureWeather />
      <DetailedForecast />
    </div>
  );
};

export default Weather;
