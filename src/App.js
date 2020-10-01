import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import AppTitle from "./components/AppTitle";
import HelperText from "./components/HelperText";
import { Container } from "react-bootstrap";
import { fetchByCoords, fetchByCity } from "./utils/fetch";
import { isEmpty } from "./utils/basic";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLoading(true);
        fetchByCoords(coords).then((result) => {
          setWeather({ ...result });
          setLoading(false);
        });
      });
    }
    console.log("Use Effect 1 fired!");
  }, []);

  const fetchCityWeather = (searchText) => {
    console.log("city Searching... ", searchText);
    setLoading(true);
    fetchByCity(searchText).then((result) => {
      result.ok ? setWeather({ ...result }) : setError({ ...result.error });
      setLoading(false);
    });
  };

  const fetchCoordsWeather = (coords) => {
    console.log("coords Searching... ", coords);
    setLoading(true);
    fetchByCoords(coords).then((result) => {
      setWeather({ ...result });
      setLoading(false);
    });
  };

  const searchProps = {
    fetchByCity: fetchCityWeather,
    fetchByCoords: fetchCoordsWeather,
  };
  return (
    <Container>
      <div>
        <AppTitle />
        <SearchBar {...searchProps} />
        {loading ? (
          "Loading..."
        ) : isEmpty(error) === false ? (
          <small style={{ color: "red" }}>
            {error.message}, try using map instead.
          </small>
        ) : isEmpty(weather) ? (
          <HelperText />
        ) : (
          <Weather data={weather.threeFive} />
        )}
      </div>
    </Container>
  );
}

export default App;
{
  /* JSON.stringify(weather) */
}
