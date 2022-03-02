import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, FormControl, Container, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import "../style/style.css";

const NavBar = () => {
  const favourites = useSelector((state) => state.favourites.elements);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">RemoteIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favourites">
              Favourites <Badge bg="secondary">{favourites.length}</Badge>
  
            </Nav.Link>
            <Nav.Link className="contactNav" href="/">
              Contact Us
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;