import React from "react";
import Cloudy from "../../../assets/icons/Cloudy.svg";

const FutureWeatherUI = (props) => {
  return (
    <div className="future-card">
      <div>Mon 21</div>
      <img src={Cloudy} alt="weather Image" />
      <div>38°</div>
      <div>27°</div>
    </div>
  );
};

export default FutureWeatherUI;
