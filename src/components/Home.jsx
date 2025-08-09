import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Row,
  Col,
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';

function CombinedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const cardData = [
    { title: "Card Title 1", text: "Some quick example text to highlight features or announcements." },
    { title: "Card Title 2", text: "Some quick example text to highlight additional features or options." },
    { title: "Card Title 3", text: "Important notes about hospital operations and patient care." },
    { title: "Card Title 4", text: "Information related to scheduling and staff directories." }
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    const keyword = searchTerm.toLowerCase();
    switch (keyword) {
      case "cancer":
      case "diabetes":
      case "hypertension":
      case "epilepsy":
      case "stroke":
      case "skinconditions":
        navigate(`/${keyword}`);
        break;
      default:
        console.log("No redirect for:", keyword);
    }
  };

  const filteredCards = cardData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Navbar Section */}
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

      {/* Homepage Content Section */}
      <Container className="home-content">
        <Form className="my-3 d-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
        </Form>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <div className="homeeeee">hhi sghreta
      <button className="box" onClick={() => navigate('/Appointments')}>Home</button>
      <button className="box" onClick={() => navigate('/services')}>Services</button>
      <button className="box" onClick={() => navigate('/about')}>About Us</button>
      <button className="box" onClick={() => navigate('/contact')}>Contact</button>
    </div>
      </Container>
    </div>
  );
}

export default CombinedPage;
