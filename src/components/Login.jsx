import React, { useState } from "react";
import { Form, Button, ToggleButton, ToggleButtonGroup, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function LoginPage() {
  const [userType, setUserType] = useState("user");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleToggleChange = (val) => {
    setUserType(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const loginData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/login", loginData);
      setLoginStatus("Login successful!");
      navigate("/Home");
    } catch (error) {
      console.error("Error logging in user", error);
      setLoginStatus("Error logging in user");
    }
  };

  const renderLoginForm = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Login as {userType === "user" ? "User" : "Admin"}
      </Button>
    </Form>
  );

  return (
    <Container className="login-container">
      <h2 className="text-center my-4">Login</h2>
      <ToggleButtonGroup
        type="radio"
        name="userType"
        value={userType}
        onChange={handleToggleChange}
        className="mb-3"
      >
        <ToggleButton id="user-toggle" value="user">
          User
        </ToggleButton>
        <ToggleButton id="admin-toggle" value="admin">
          Admin
        </ToggleButton>
      </ToggleButtonGroup>
      {loginStatus && <div className="text-center mb-3">{loginStatus}</div>}
      {renderLoginForm()}
    </Container>
  );
}

export default LoginPage;
