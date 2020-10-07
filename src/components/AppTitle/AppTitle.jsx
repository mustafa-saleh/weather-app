import React from "react";
import "./AppTitle.css";

const AppTitle = (props) => {
  return <h1 id="app-title">{props.children}</h1>;
};

export default AppTitle;
