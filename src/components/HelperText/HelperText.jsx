import React from "react";
import './HelperText.css';

const HelperText = () => {
  return (
    <div className="help-text">
      <p>
        <strong> Search engine is very flexible. How it works:</strong>
        <br />
        To make it more precise put the city's name, comma, 2-letter country
        code (ISO3166). You will get all proper cities in chosen country. The
        order is important - the first is city name then comma then country.
        Example - London, GB or New York, US.
      </p>
    </div>
  );
};

export default HelperText;
