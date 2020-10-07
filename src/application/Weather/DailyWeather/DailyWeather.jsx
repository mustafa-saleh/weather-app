import React, { useContext } from "react";
import { Tab } from "react-bootstrap";
import WeatherTabs from "../../../components/BsTabs";
import { UnitContext, units } from "../../../components/UnitContext";
import { getEpochDateTime, getTimeLabel } from "../../../utils/datetime";
import { toFehrehite } from "../../../utils/unitConverter";
import "./DailyWeather.css";
import WeatherChart from "./WeatherChart";
import TabTitle from "./WeatherTab";

const DailyWeather = ({ threeFive, oneCall }) => {
  const unit = useContext(UnitContext);
  const daily = oneCall.daily.slice(0, 5);
  let timezone = oneCall.timezone_offset;

  const getTemperature = (temp) => {
    return Math.round(unit === units.celcius ? temp : toFehrehite(temp));
  };

  const getStep = () => {
    return unit === units.celcius ? 1 : 3;
  };

  const getMax = () => {
    return unit === units.celcius ? 10 : 30;
  };

  const getLabels = (details) =>
    details.map((item) => getTimeLabel(item.dt, timezone));
  const getData = (details) =>
    details.map((item) => getTemperature(item.main.temp));
  const getTabTitle = (day) => <TabTitle day={day} timezone={timezone} />;

  const getChartData = (day, details) => {
    const title = getTabTitle(day);
    const labels = getLabels(details);
    const data = getData(details);
    return { title, labels, data };
  };

  const getDetails = (list, index) => {
    const indexList = [];
    let date = -1;
    list.forEach((el, idx) => {
      const nextDate = getEpochDateTime(el.dt, timezone).getDate();
      if (nextDate !== date) indexList.push(idx);
      date = nextDate;
    });
    return list.slice(indexList[index], indexList[index] + 8);
  };

  return (
    <div className="daily-weather">
      <WeatherTabs activeTab={"tab-0"}>
        {daily.map((day, idx) => {
          const details = getDetails(threeFive.list, idx);
          const chartData = getChartData(day, details);
          return (
            <Tab key={day.dt} eventKey={`tab-${idx}`} title={chartData.title}>
              <div className="chart">
                <WeatherChart
                  labels={chartData.labels}
                  data={chartData.data}
                  tickMax={Math.max(...chartData.data) + getMax()}
                  tickStep={getStep()}
                />
              </div>
            </Tab>
          );
        })}
      </WeatherTabs>
    </div>
  );
};

export default DailyWeather;
