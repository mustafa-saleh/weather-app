import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import MapContainer from "../GoogleMaps";
import "./Modal.css";
import { isEmpty } from "../../utils/basic";

const FaModal = ({ show, close, fetchWeather }) => {
  const [marker, setMarker] = useState({});
  const handleClose = () => close();

  const handleSearch = () => {
    if(!isEmpty(marker)){
      fetchWeather(marker);
      close();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body>
        <MapContainer marker={marker} setMarker={setMarker} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" size="sm" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" size="sm" onClick={handleSearch}>
          Search Location
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaModal;
