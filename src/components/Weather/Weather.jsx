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
      <WeatherDateTime
        description={data.list[0].weather[0].description}
        dt={data.list[0].dt}
        timezone={data.city.timezone}
      />
      <FutureWeather list={data.list}/>
      <DetailedForecast />
    </div>
  );
};

export default Weather;
