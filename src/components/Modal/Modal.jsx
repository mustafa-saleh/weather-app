import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const FaModal = ({ show, close, children, onSubmit }) => {
  const handleClose = () => close();
  const handleSubmit = () => {
    onSubmit();
    close();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="light" size="sm" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" size="sm" onClick={handleSubmit}>
          Search Location
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaModal;
