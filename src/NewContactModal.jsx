import React, { useRef } from 'react'
import { Form, Modal, ModalBody } from 'react-bootstrap'

const NewContactModal = ({ closeModal }) => {
  function  handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
    <Modal.Header closeButton>
      Create Contacts
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}></Form>
      <Form.Group>
        <Form.Label>Id</Form.Label>
        <Form.Control type='text' ref={idRef} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type='Name' ref={idRef} required />
      </Form.Group>
    </Modal.Body>
    </>
  )
}

export default NewContactModal
