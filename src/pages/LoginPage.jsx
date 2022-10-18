import { Link } from "react-router-dom";
import Login from "../components/Login";
import { Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center mb-3">Login</h1>
          <Login />
          <p className="my-2 text-center">
            Or <Link to="/register"> register</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
