import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import FaIcon from "../../components/FontAwesome/FontAwesome";
import GoogleMap from "./GoogleMap";
import "./SearchBar.css";

const WeatherForm = ({ search, setSearch, onFormSubmit }) => {
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input
        placeholder="search city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {!search.length ? null : (
        <FaIcon icon={faTimes} onClick={() => setSearch("")} />
      )}
      <FaIcon
        icon={faSearch}
        color="#1287A5"
        onClick={(e) => onFormSubmit(e)}
      />
    </form>
  );
};

const SearchBar = ({ getWeather }) => {
  const [city, setCity] = useState("");

  const getByCoords = (marker) => {
    getWeather(marker);
    setCity("");
  };

  const getByCity = (event) => {
    event.preventDefault();
    if (city.trim().length > 0) {
      getWeather(null, city.trim());
    }
  };

  return (
    <div id="search-bar">
      <WeatherForm search={city} setSearch={setCity} onFormSubmit={getByCity} />
      <GoogleMap onMapSubmit={getByCoords} />
    </div>
  );
};

export default SearchBar;
