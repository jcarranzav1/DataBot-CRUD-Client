import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand as={Link} className=" ms-5 fs-3" to="/">
        CRUD DataBot
      </Navbar.Brand>
      <Nav className="me-auto fs-5">
        <Nav.Link as={Link} to="/">
          All Users
        </Nav.Link>
        <Nav.Link as={Link} to="/addUser">
          Add New User
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
export default Navigation;
