import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent( {color, setcolor} ) {

  function changeColor(colorName){
    setcolor(colorName);
  }

  return (
    <Navbar bg={color} variant={color} expand="lg" className="ps-4 pe-4">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo_trim.png"
            width="40"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          NDVP
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#summary">Summary</Nav.Link>
            <Nav.Link href="#funding">Funding</Nav.Link>
            <Nav.Link href="#report">Report</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#management">Management</NavDropdown.Item>
              <NavDropdown.Item href="#research">Research</NavDropdown.Item>
              <NavDropdown.Item href="#request">Requests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#login">Log In</Nav.Link>
            <Nav.Link href="#createAccount">Create An Account</Nav.Link>
            <Nav.Link onClick={() => {changeColor("light")}}>Light</Nav.Link>
            <Nav.Link onClick={() => {changeColor("dark")}}>Dark</Nav.Link>
          </Nav>

        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
