import React, { useState } from "react";
import FaIcon from "../FontAwesome";
import MapModal from "../Modal";
import {
  faMapMarkedAlt,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const WeatherForm = ({ searchText, setSearchText, fetchWeather }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length > 0) {
      fetchWeather(searchText.trim());
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="search city"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText.length ? (
        <FaIcon icon={faTimes} onClick={() => setSearchText("")} />
      ) : null}
      <FaIcon
        icon={faSearch}
        color="#1287A5"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
};

const GoogleMap = ({ fetchWeather }) => {
  const [show, setShow] = useState(false);

  const openMap = () => setShow(true);
  const closeMap = () => setShow(false);

  return (
    <>
      <FaIcon icon={faMapMarkedAlt} size="xs" />
      <small onClick={openMap}>use google maps</small>
      <MapModal show={show} close={closeMap} fetchWeather={fetchWeather} />
    </>
  );
};

const SearchBar = ({ fetchByCity, fetchByCoords }) => {
  const [searchText, setSearchText] = useState("");
  const searchProps = { searchText, setSearchText, fetchWeather: fetchByCity };

  return (
    <div id="search-bar">
      <WeatherForm {...searchProps} />
      <GoogleMap fetchWeather={fetchByCoords} />
    </div>
  );
};

export default SearchBar;
