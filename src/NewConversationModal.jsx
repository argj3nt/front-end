import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NewConversationModal = ({ closeModal }) => {
  function  handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}></Form>
      {Contacts.map(contact)}
    </Modal.Body>
    </>
  )
}

export default NewConversationModal
