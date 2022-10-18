import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
import { Container, Row, Col } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="mb-3 text-center">Register</h1>
          <SignUp />
          <p className="my-2 text-center">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
