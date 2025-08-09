import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './profile.css';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate(); // For redirect on logout
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [userId]);

  const handleLogout = () => {
    // Example logout logic
    localStorage.removeItem("token"); // if you're using token auth
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Navbar.Brand href="#">Hospital Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/service">Service</Link>
            <Link className="nav-link" to="/findhospital">Find Hospital</Link>
            <Link className="nav-link" to="/library">Library</Link>
            <Link className="nav-link" to={`/profile/${userId}`}>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-5">
        {!user ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="text-center shadow-sm">
                <Card.Img
                  variant="top"
                  src={user.profilePic || "/default-avatar.png"}
                  onError={(e) => (e.target.src = "/default-avatar.png")}
                  alt="Profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "20px auto",
                    borderRadius: "50%",
                    border: "4px solid #17a2b8"
                  }}
                />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>Email: {user.email}</Card.Text>
                  <Card.Text>Phone: {user.phone}</Card.Text>
                  <Card.Title className="mt-4">History</Card.Title>
                  <ul className="text-start">
                    {user.history?.map((entry, index) => (
                      <li key={index}>{entry}</li>
                    ))}
                  </ul>
                  <Button variant="danger" onClick={handleLogout}>
                    Log Out
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default Profile;
