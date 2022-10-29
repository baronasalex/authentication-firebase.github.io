import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormMain from "./FormMain";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <Container>
      <Row md={12}>
        <FormMain title="Sign in" handleClick={handleLogin} />
      </Row>
      <Col className="text-center ">
        <Button variant="outline-*">
          <GoogleButton onClick={handleGoogleSignIn} />
        </Button>
      </Col>
    </Container>
  );
};

export default Login;
