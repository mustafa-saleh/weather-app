import React from "react";
import { useState } from "react";
import { UnitContext, units } from "../../components/UnitContext";
import DailyWeather from "./DailyWeather";
import DetailedForecast from "./DetailedForecast";
import Location from "./Location";
import "./Weather.css";
import WeatherDateTime from "./WeatherDateTime";
import WeatherInfo from "./WeatherInfo";

const Weather = ({ data }) => {
  const [weatherUnit, setWeatherUnit] = useState(units.celcius);
  const { threeFive, oneCall } = data;

  const changeWeatherUnit = () => {
    weatherUnit === units.celcius
      ? setWeatherUnit(units.farenheit)
      : setWeatherUnit(units.celcius);
  };

  return (
    <UnitContext.Provider value={weatherUnit}>
      <div className="card">
        <Location city={threeFive.city} />
        <WeatherInfo weather={oneCall} changeUnit={changeWeatherUnit} />
        <WeatherDateTime
          current={oneCall.current}
          timezone={oneCall.timezone_offset}
        />
        <DailyWeather {...data} />
        <DetailedForecast />
      </div>
    </UnitContext.Provider>
  );
};

export default Weather;
