import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewConversationModal = ({ closeModal }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Modal.Body>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Search for a user</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

// I deleted  {Contacts.map(contact)} from the return statement because it was breacing the code 
// I have added simple form to search for a user with whom you want to start a conversation

export default NewConversationModal;
