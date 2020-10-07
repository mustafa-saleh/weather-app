import React, { useContext } from "react";
import { UnitContext, units } from "../../../components/UnitContext";
import { getWeatherDate } from "../../../utils/datetime";
import { getTabIcon } from "../../../utils/icons";
import { toFehrehite } from "../../../utils/unitConverter";

const TabTitle = ({ day, timezone }) => {
  const unit = useContext(UnitContext);

  const getTemperature = (temp) => {
    return Math.round(unit === units.celcius ? temp : toFehrehite(temp));
  };

  return (
    <div className="daily-card">
      <div>{getWeatherDate(day.dt, timezone)}</div>
      <div>
        <img src={getTabIcon(day)} alt="weather" />
      </div>
      <div>{getTemperature(day.temp.max)}°</div>
      <div>{getTemperature(day.temp.min)}°</div>
    </div>
  );
};

export default TabTitle;
