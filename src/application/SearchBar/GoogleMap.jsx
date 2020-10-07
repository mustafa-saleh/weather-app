import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import FaIcon from "../../components/FontAwesome/FontAwesome";
import MapContainer from "../../components/GoogleMaps";
import MapModal from "../../components/Modal/Modal";
import { isEmpty } from "../../utils/basic";

const GoogleMap = ({ onMapSubmit }) => {
  const [show, setShow] = useState(false);
  const [marker, setMarker] = useState({});

  const toggleModal = (value) => setShow(value);
  const handleSubmit = () => {
    if (!isEmpty(marker)) onMapSubmit(marker);
  };

  return (
    <>
      <FaIcon icon={faMapMarkedAlt} size="xs" />
      <small onClick={() => toggleModal(true)}>use google maps</small>
      <MapModal
        show={show}
        close={() => toggleModal(false)}
        onSubmit={handleSubmit}
      >
        <MapContainer marker={marker} setMarker={setMarker} />
      </MapModal>
    </>
  );
};

export default GoogleMap;
