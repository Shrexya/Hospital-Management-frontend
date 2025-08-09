import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button, Carousel, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Findhospital() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
    <Navbar.Brand href="#">Hospital Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/service">Service</Link>
        <Link className="nav-link" to="/findhospital">Find Hospital</Link>
        <Link className="nav-link" to="/library">Library</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
export default Findhospital;
