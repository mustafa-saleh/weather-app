import React from "react";
import { Tabs } from "react-bootstrap";
import "./BsTabs.css";

const BsTabs = ({ activeTab, children }) => {
  return (
    <Tabs
      defaultActiveKey={activeTab}
      mountOnEnter={true}
      bsPrefix="nv"
      variant="weather-tabs"
    >
      {children}
    </Tabs>
  );
};

export default BsTabs;
