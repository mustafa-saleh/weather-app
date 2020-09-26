import React from "react";
import { IconContext } from "react-icons";
import { BsSearch, BsX } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <div className="form-card">
        <input placeholder="Search City" className="form-control" />
        <button
          className="btn btn-light"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Clear"
        >
          <IconContext.Provider value={{ size: "1.5em", color: "grey" }}>
            <BsX />
          </IconContext.Provider>
        </button>
        <button
          type="submit"
          className="btn btn-light"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Search"
        >
          <IconContext.Provider value={{ size: "1.3em", color: "#1287A5" }}>
            <BsSearch />
          </IconContext.Provider>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;