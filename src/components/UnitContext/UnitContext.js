import React from "react";

const units = {
  celcius: 0,
  farenheit: 1,
};

const UnitContext = React.createContext(units.celcius);

export { UnitContext, units };
