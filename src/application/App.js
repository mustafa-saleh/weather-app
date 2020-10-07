import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AppTitle from "../components/AppTitle";
import HelperText from "../components/HelperText";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Weather from "../application/Weather";
import { isEmpty } from "../utils/basic";
import { fetchByCity, fetchByCoords } from "../utils/fetch";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";

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
        fetchWeather(coords);
      });
    }
    console.log("Use Effect fired!");
  }, []);

  const fetchWeather = (coords, city = null) => {
    console.log("fetching: ", coords, city);
    setLoading(true);
    setError({});
    city !== null
      ? fetchByCity(city).then((result) => {
          result.ok ? setWeather({ ...result }) : setError({ ...result.error });
          setLoading(false);
        })
      : fetchByCoords(coords).then((result) => {
          setWeather({ ...result });
          setLoading(false);
        });
  };

  return (
    <Container id="app">
      <div>
        <AppTitle>OpenWeather App</AppTitle>
        <SearchBar getWeather={fetchWeather} />
        {loading ? (
          <Loading />
        ) : !isEmpty(error) ? (
          <Error>{error.message}, try using map instead.</Error>
        ) : isEmpty(weather) ? (
          <HelperText />
        ) : (
          <Weather data={weather} />
        )}
      </div>
    </Container>
  );
}

export default App;
