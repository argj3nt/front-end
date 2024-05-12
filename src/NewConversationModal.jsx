import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewConversationModal = ({ closeModal }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Search for a user</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
        </Modal.Body>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
