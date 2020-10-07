var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDay(datetime) {
  return days[datetime.getDay()];
}

function getWeatherDateTime(utcSeconds, timezone) {
  const dt = new Date(0);
  const utcDt = utcSeconds + timezone;
  dt.setUTCSeconds(utcDt);

  let options = { hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  return `
  ${getDay(dt)} ${dt.getDate()}, ${dt.toLocaleTimeString([], options)}
  `;
}

function getEpochDateTime(utcSeconds, timezone) {
  const dt = new Date(0);
  const utcDt = utcSeconds + timezone;
  dt.setUTCSeconds(utcDt);
  return dt;
}

function getWeatherDate(utcSeconds, timezone) {
  const dt = new Date(0);
  const utcDt = utcSeconds + timezone;
  dt.setUTCSeconds(utcDt);

  return `${getDay(dt)} ${dt.getDate()}`;
}

function getTimeLabel(utcSeconds, timezone) {
  const dt = new Date(0);
  const utcDt = utcSeconds + timezone;
  dt.setUTCSeconds(utcDt);

  let options = { hour: "numeric", timeZone: "UTC" };
  return `${dt.toLocaleTimeString([], options)}`;
}

function dayOrNight(time) {
  if (time.dt > time.sunrise && time.dt < time.sunset) {
    return "day";
  } else {
    return "night";
  }
}

export {
  getDay,
  getWeatherDate,
  getWeatherDateTime,
  dayOrNight,
  getTimeLabel,
  getEpochDateTime,
};
