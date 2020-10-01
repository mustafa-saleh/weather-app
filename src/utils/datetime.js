var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDay(datetime) {
  return days[datetime.getDay()];
}

function getWeatherDate(utcSeconds, timezone) {
  const dt = new Date(0);
  const utcDt = utcSeconds + timezone;
  dt.setUTCSeconds(utcDt);

  let options = { hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  return `
  ${getDay(dt)} ${dt.getDate()}, ${dt.toLocaleTimeString([], options)}
  `;
}

export { getDay, getWeatherDate };
