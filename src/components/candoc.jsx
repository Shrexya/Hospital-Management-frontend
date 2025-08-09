import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Library.css';
// Define the Library component
function Library() {
    // This is where we define diseases inside the Library component
    const diseases = [
        { name: 'Cancer', link: '/cancer' },
        { name: 'Diabetes', link: '/diabetes' },
        { name: 'Hypertension', link: '/hypertension' },
        { name: 'Epilepsy', link: '/epilepsy' },
        { name: 'Stroke', link: '/stroke' },
        { name: 'Skinconditions', link: '/skinconditions' },
        
    ];

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

            {/* Disease Cards */}
            <div className="card-container">
                {diseases.map((disease, index) => (
                    <div key={index} className="card">
                        <h2>{disease.name}</h2>
                        <p>Learn more about {disease.name}.</p>
                        <Link to={disease.link} className="button">
                            <p>View Details</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Library;
