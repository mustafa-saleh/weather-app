import Day from "../assets/icons/Day.svg";
import DayClouds from "../assets/icons/DayCloud.svg";
import Night from "../assets/icons/Night.svg";
import NightClouds from "../assets/icons/NightCloud.svg";
import Rain from "../assets/icons/Raining.svg";
import { dayOrNight } from "./datetime";

function getWeatherIcon(weather) {
  const status = weather.weather[0].main;
  const time = dayOrNight(weather);

  switch (status) {
    case "Rain":
      return Rain;
    case "Clouds":
      return time === "day" ? DayClouds : NightClouds;
    default:
      return time === "day" ? Day : Night;
  }
}

function getTabIcon(weather) {
  const status = weather.weather[0].main;
  switch (status) {
    case "Rain":
      return Rain;
    case "Clouds":
      return DayClouds;
    default:
      return Day;
  }
}

export { getWeatherIcon, getTabIcon };
