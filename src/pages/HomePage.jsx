import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Page</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {email}{" "}
              <Button
                size="sm"
                variant="warning"
                onClick={() => dispatch(removeUser())}
              >
                Log out
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="justify-content-md-center sm={12}">
            <h1>Welcome {email}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
