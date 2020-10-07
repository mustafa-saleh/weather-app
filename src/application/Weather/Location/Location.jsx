import React from "react";
import "./Location.css";

const Location = ({ city }) => {
  return (
    <div id="location">
      {`${city.name}, ${city.country}`}
      <br />
      <small>Updated a few minutes ago</small>
    </div>
  );
};

export default Location;
