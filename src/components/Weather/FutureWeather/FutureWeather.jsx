import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./FutureWeather.css";
import FutureWeatherUI from "./FutureWeatherUI";
import WeatherChart from "./WeatherChart";

const FutureWeather = () => {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Weathers = temp.map((val) => (
    <Tab key={val} eventKey={`tab-${val}`} title={<FutureWeatherUI />}>
      <div className="chart">
        <WeatherChart />
        {/* {`Tab ${val} Context`} */}
      </div>
    </Tab>
  ));

  return (
    <div className="future-weather">
      <Tabs
        defaultActiveKey="tab-1"
        transition={false}
        bsPrefix="nv"
        variant="weather-tabs"
      >
        {Weathers}
      </Tabs>
    </div>
  );
};

export default FutureWeather;
