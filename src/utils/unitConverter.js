function toCelcius(temperature) {
  return ((temperature - 32) * 5) / 9;
}

function toFehrehite(temperature) {
  return (temperature * 9) / 5 + 32;
}

function meterToMiles(value) {
  return value / 1609;
}

function kilosToMiles(value) {
  return value / 1.609;
}

export { toCelcius, toFehrehite, meterToMiles, kilosToMiles };
