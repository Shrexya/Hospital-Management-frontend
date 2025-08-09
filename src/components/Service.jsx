import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Service.css';

// Define the Library component
function Service() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Handler for the search bar
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`); // Redirect to the search results page
    } else {
      alert("Please enter a valid search query.");
    }
  };

  // Handler for the Book Appointment button
  const handleBookAppointment = () => {
    navigate("/Appointments"); // Navigate to the appointment page
  };

  return (
    <div>
      {/* Navbar */}
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

      <div className="container">
        <div className="header">
          <h1>Welcome to Our Service</h1>
          <p>Your one-stop destination for booking appointments and more.</p>
          <button className="book-btn" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Card Title 1</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 2</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 3</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 3</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 3</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 3</h3>
            <p>Card content goes here.</p>
          </div>
          <div className="card">
            <h3>Card Title 3</h3>
            <p>Card content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
