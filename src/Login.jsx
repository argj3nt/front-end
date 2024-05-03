import React, { useRef } from 'react';
import './Login.css';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <>
      <Container className='mainlogin'>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit} className='w-100'>
          <Form.Group className="text-center"> {/* Ajout de la classe text-center pour centrer le contenu */}
            <Form.Label className='user'>Enter your username:</Form.Label><br />
            <Form.Control className='log small-width mx-auto' type='text' ref={idRef} required /><br />
            <Form.Label className='user'>Enter your password:</Form.Label><br />
            <Form.Control className='log small-width mx-auto' type='password' ref={idRef} required />
          </Form.Group>
          <Button type='submit' className='mr2' variant='primary'>Login</Button><br />
          <Button onClick={createNewId} variant='secondary'>Create an account</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
