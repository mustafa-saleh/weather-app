import React from "react";
import "./DetailedForecast.css";

const DetailedForecast = () => {
  return (
    <div className="detailed">
      <a
        href="https://openweathermap.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Detailed forecast
      </a>{" "}
      · Data from OpenWeather
    </div>
  );
};

export default DetailedForecast;
