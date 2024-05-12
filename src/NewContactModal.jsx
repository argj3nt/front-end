import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
//deleted Modal.Body from the import statement
const NewContactModal = ({ closeModal }) => {
  const nameRef = useRef(); //added nameRef to handle the name input
  
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
