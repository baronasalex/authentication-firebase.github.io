import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const FormMain = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 "
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Col className="text-center">
              <Button
                variant="primary"
                /* type="submit" */
                onClick={() => handleClick(email, pass)}
              >
                {title}
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormMain;
