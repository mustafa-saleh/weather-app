import React from "react";
import Night from "../../../assets/icons/Night.svg";
import "./WeatherInfo.css";

const OtherInfo = ({humidity, wind}) => {
  return (
    <div className="other-info">
      <div>Precipitation: 1%</div>
      <div>Wind: {Math.round(wind.speed)} KMPH</div>
      <div>Humidity: {humidity}%</div>
    </div>
  );
};

const MainInfo = ({main, weather}) => {
  return (
    <div className="main-info">
      <img src={Night} alt="weather logo" />
      <p>{Math.round(main.temp)}</p>
      <div className="temperature">
        <div>°C</div>
        <button id="feh-button" className="btn btn-link">
          F
        </button>
      </div>
      <div>
        <div>{Math.round(main.temp_max)}°</div>
        <div>{Math.round(main.temp_min)}°</div>
      </div>
    </div>
  );
};

const WeatherInfo = ({currentWeather}) => {
  return (
    <div className="info">
      <MainInfo main={currentWeather.main} weather={currentWeather.weather} />
      <OtherInfo humidity={currentWeather.main.humidity} wind={currentWeather.wind} />
    </div>
  );
};

export default WeatherInfo;
