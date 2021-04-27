import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import LoginModal from "react-login-modal";
export default function () {
  const initial = {
    items: [
      {
        name: "MacBook",
        qty: 1,
        rate: 100000,
      },
      {
        name: "Dell Inspiron",
        qty: 1,
        rate: 90000,
      },
    ],
  };

  const [state, setState] = useState(initial);

  return (
    <div>
      <h1 className="text-center">Order Details</h1>
      <div className="d-flex justify-content-end">
        <AddItems />
      </div>
      </div>
  );
}

function AddItems() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(false);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Items
      </Button>

      <LoginModal
        show={show} onHide={handleClose}
      />


      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control
                type-="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal> */}

    </>
  );
}