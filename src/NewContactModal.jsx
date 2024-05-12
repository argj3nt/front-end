import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const NewContactModal = ({ closeModal }) => {
  const nameRef = useRef();
  
  function  handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <Modal.Header closeButton>Create Contacts</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" ref={nameRef} required />
          </Form.Group>
          <Button type='submit'>create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default NewContactModal
