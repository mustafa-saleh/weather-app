import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaIcon = (props) => {
  return (
    <span>
      <FontAwesomeIcon color="#767676" size="lg" {...props}/>
    </span>
  );
};

export default FaIcon;
