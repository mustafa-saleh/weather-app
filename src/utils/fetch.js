import { API_URL, API_KEY } from "../config";

function getQuery(city, coords) {
  let query;
  if (coords === null) {
    query = `?q=${city}`;
  } else {
    query = `?lat=${coords.lat}&lon=${coords.lng}&exclude=minutely,hourly,alerts`;
  }

  return `${query}&appid=${API_KEY}&units=metric&lang=en`;
}

function getUrl(targetApi, city, coords) {
  const query = getQuery(city, coords);
  return `${API_URL}${targetApi}${query}`;
}

async function fetchByCoords(coords) {
  const ret = {};
  const url1 = getUrl("forecast", null, coords);
  const url2 = getUrl("onecall", null, coords);

  await Promise.all([
    fetch(url1).then((value) => value.json()),
    fetch(url2).then((value) => value.json()),
  ])
    .then((value) => {
      ret.threeFive = value[0];
      ret.oneCall = value[1];
    })
    .catch((err) => {
      console.log("fetch ERROR: ", err);
    });
  return ret;
}

async function fetchByCity(cityName) {
  const ret = {};
  const url1 = getUrl("forecast", cityName, null);

  const response = await fetch(url1);
  if (response.ok) {
    await response.json().then(async (value) => {
      const coords = {
        lat: value.city.coord.lat,
        lng: value.city.coord.lon,
      };
      const url2 = getUrl("onecall", null, coords);
      const response2 = await fetch(url2);
      if (response2.ok) {
        await response2.json().then((result) => {
          ret.threeFive = value;
          ret.oneCall = result;
          ret.ok = true;
        });
      }
    })
    .catch((err) => {
      console.log("fetch city ERROR: ", err);
    });
  } else {
    await response.json().then(err => {
      ret.ok = false;
      ret.error = err;
    })
  }
  return ret;
}

export { fetchByCoords, fetchByCity };
