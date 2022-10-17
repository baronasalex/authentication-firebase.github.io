import {Container, Navbar} from 'react-bootstrap';
import { Navigate  } from 'react-router-dom';
import React from 'react'

const HomePage = () => {
  return (

    <Navbar>
      <Container>
        <Navbar.Brand href="/">Hello</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Navigate  to = "/login" />
             Signed in as: <a href="/login"> LOGIN DATA </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   
  )
}

export default HomePage