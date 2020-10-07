import React, { useContext } from "react";
import { UnitContext, units } from "../../../components/UnitContext";
import { getWeatherIcon } from "../../../utils/icons";
import {
  kilosToMiles, meterToMiles, toFehrehite
} from "../../../utils/unitConverter";
import "./WeatherInfo.css";

const WeatherInfo = ({ weather, changeUnit }) => {
  const unit = useContext(UnitContext);
  const { current, daily } = weather;

  const icon = getWeatherIcon(current);

  const getTemperature = (temp) => {
    return Math.round(unit === units.celcius ? temp : toFehrehite(temp));
  };

  const getUnit = (type) => {
    return type === "unit"
      ? unit === units.celcius
        ? "C"
        : "F"
      : unit === units.celcius
      ? "F"
      : "C";
  };

  const getVision = (vision) => {
    return unit === units.celcius
      ? `${Math.round(vision / 1000)} KM`
      : `${Math.round(meterToMiles(vision))} M`;
  };

  const getWind = (wind) => {
    return unit === units.celcius
      ? `${Math.round(wind)} KMPH`
      : `${Math.round(kilosToMiles(wind))} MPH`;
  };

  return (
    <div id="current-info">
      <div id="icon">
        <img src={icon} alt="weather logo" />
      </div>
      <div id="temperature">
        <div>{getTemperature(current.temp)}</div>
        <div>
          <div>°{getUnit("unit")}</div>
          <div></div>
          <div onClick={changeUnit}>{getUnit("button")}</div>
        </div>
      </div>
      <div id="min-max">
        <div>{getTemperature(daily[0].temp.max)}°</div>
        <div>{getTemperature(daily[0].temp.min)}°</div>
      </div>
      <div id="extra-info">
        <div>Vision: {getVision(current.visibility)}</div>
        <div>Wind: {getWind(current.wind_speed)}</div>
        <div>Humidity: {current.humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
