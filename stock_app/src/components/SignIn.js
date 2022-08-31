import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function SignIn() {

  return (
    <Form className="d-flex">
        <InputGroup className="" controlid="formBasicEmail">
          <Button variant="outline-primary">Log In</Button>
          <Button variant="outline-primary">Create An Account</Button>
          <Button variant="outline-primary">Dark</Button>
          <Button variant="outline-primary">Light</Button>
        </InputGroup>
    </Form>
  )
}

export default SignIn;
