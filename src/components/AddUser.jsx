import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../apis/users';

export default function AddUser() {
  const [payload, setPayload] = useState({});
  const navigate = useNavigate();
  const handleInputs = ({ target }) => {
    setPayload({ ...payload, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(payload);
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} className="mb-3" sm={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="name" onChange={handleInputs} placeholder="First Name" required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" sm={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              onChange={handleInputs}
              placeholder="Last Name"
              type="text"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" sm={6}>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="username"
              onChange={handleInputs}
              placeholder="User Name"
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" sm={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={handleInputs}
              placeholder="Email"
              type="email"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" sm={6}>
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" onChange={handleInputs} placeholder="Phone" required />
          </Form.Group>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button className="me-3" type="Submit" variant="primary">
            Submit
          </Button>
          <Button onClick={() => navigate('/')} variant="secondary">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
