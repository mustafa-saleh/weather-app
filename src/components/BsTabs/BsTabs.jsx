import React from "react";
import { Tabs } from "react-bootstrap";
import "./BsTabs.css";

const BsTabs = ({ activeTab, children }) => {
  return (
    <Tabs
      defaultActiveKey={activeTab}
      transition={false}
      bsPrefix="nv"
      variant="weather-tabs"
    >
      {children}
    </Tabs>
  );
};

export default BsTabs;
