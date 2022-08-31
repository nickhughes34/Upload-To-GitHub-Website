import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Histroy( {top10, setFinalSearch} ) {

  function change(item){
    setFinalSearch(item)
  }

  return (
    <Form className='text-center'>
      <Form.Group className="mb-0" controlId="formBasicEmail">
        <Form.Label>History</Form.Label>
      </Form.Group>

      <div className='text-center'>
      {/* Every time a search is entered a button should appear here with the results*/}
      {top10.map( (item) =>
          <Row className="d-flex justify-content-center align-items-center">
          <Button key = {item} variant="secondary" className="m-1"  style={{width:"70px"}} onClick={() => change(item)}>{item}</Button>
          </Row>
        )}
      </div>

    </Form>
  );
}

export default Histroy;
