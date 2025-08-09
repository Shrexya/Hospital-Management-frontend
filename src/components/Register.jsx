import React, { useState } from "react";
import { Form, Button, ToggleButton, ToggleButtonGroup, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

function RegisterPage() {
  const [userType, setUserType] = useState("user");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const navigate = useNavigate();

  const handleToggleChange = (val) => {
    setUserType(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const userData = {
      email: formElements.email.value,
      password: formElements.password.value,
      fullName: formElements.fullName.value,
      age: formElements.age.value,
      phone: formElements.phone.value,
      ...(userType === "admin" && {
        department: formElements.department?.value
      })
    };

    try {
      await axios.post("http://localhost:5000/api/register", userData);
      setRegistrationStatus("Registration successful!");
      navigate("/Home");
    } catch (error) {
      console.error("Error registering user", error);
      setRegistrationStatus("Error registering user");
    }
  };

  const renderUserForm = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="fullName" type="text" placeholder="Full Name" required />
      </Form.Group>
      <Form.Group controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control name="age" type="number" placeholder="Age" required />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="phone" type="text" placeholder="Phone Number" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Register as User
      </Button>
    </Form>
  );

  const renderAdminForm = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="fullName" type="text" placeholder="Full Name" required />
      </Form.Group>
      <Form.Group controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control name="age" type="number" placeholder="Age" required />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="phone" type="text" placeholder="Phone Number" required />
      </Form.Group>
      <Form.Group controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control name="department" type="text" placeholder="Department" />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Register as Admin
      </Button>
    </Form>
  );

  return (
    <Container className="register-container">
      <h2 className="text-center my-4">Register</h2>
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
      {registrationStatus && <div className="text-center mb-3">{registrationStatus}</div>}
      {userType === "user" ? renderUserForm() : renderAdminForm()}
    </Container>
  );
}

export default RegisterPage;
