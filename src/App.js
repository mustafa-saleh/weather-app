import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import AppTitle from "./components/AppTitle";
import { Container } from "react-bootstrap";
import { API_URL, API_KEY } from "./config";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({});
  const query = "?" + "q=khartoum" + "&appid=" + API_KEY + "&units=metric";
  const url = API_URL + query;

  async function fetchData() {
    setLoading(true);
    const response = await fetch(url);
    response
      .json()
      .then((result) => {
        if (response.ok) setWeatherInfo(result);
        else setError(result);
        setLoading(false);
      })
      .catch((err) => console.log("ERROR: ", err));
  }

  useEffect(() => {
    fetchData();
    console.log("Use Effect fired!");
  }, []);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <AppTitle />
          <SearchBar />
          <Weather data={weatherInfo} />
        </div>
      )}
    </Container>
  );
}

export default App;
