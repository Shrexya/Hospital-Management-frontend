import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';  // Import Hero-specific CSS
import cardiology from "./cardiology.jpg"; // Import the image
import onchology from "./onchology.jpg"; // Import the image
import urology from "./urology.jpg"; // Import the image
import orthopeadics from "./orthopeadics.jpg"; // Import the image
import neaurology from "./neaurology.jpg"; // Import the image
import gastroenterology from "./gastroenterology.jpg"; // Import the image


function Hero() {
  const images = [
    cardiology, // Replace these with your actual image URLs
    onchology,
    urology,
    orthopeadics,
    neaurology,
    gastroenterology
  ];
  const services = [
    { image: 'orthopeadics.jpg', name: 'Consulting' },
    { image: 'neaurology.jpg', name: 'Development' },
    { image: 'urology.jpg', name: 'Design' },
    { image: 'orthopeadics.jpg', name: 'Consulting' },
    { image: 'neaurology.jpg', name: 'Development' },
    { image: 'urology.jpg', name: 'Design' },
    // Add more items as needed
  ];
  
  const texts = ["Cardiology", "Onchology", "Nephrology", "Orthopeadics","Neaurology","Gastroenterology"]; // Array of unique texts
  return (
    <div className='main'>
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Hospital Management System</h1>
        <p>Your health, our priority</p>
        <div className="hero-buttons">
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/register">Register</Link></button>
        </div>
      </div>
    </div>
    <div className="mid-sec">
  {/* Existing Section */}
  <div className="note">Centres of Excellence</div>
  <div className="cards-container">
    {images.map((image, index) => (
      <div key={index} className="circle-card-wrapper">
        <div
          className="circle-card"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="circle-text">{texts[index]}</div>
      </div>
    ))}
  </div>

  {/* New Section */}
  <div className="note">We are Covid Safe</div>
      <div className="para">
  While these challenging times have brought many changes, at Apollo Hospitals one thing remained the same – Our commitment to the safety of our patients, their loved ones and our staff. We have established a safe environment and were among the first in the country to implement a range of rigorous protocols, which includes the following:
      </div>

  
<div className="card-contain">
  <div className="card-home">Card 1</div>
  <div className="card-home">Card 2</div>
  <div className="card-home">Card 3</div>
  <div className="card-home">Card 4</div>
  <div className="card-home">Card 5</div>
  <div className="card-home">Card 6</div>
</div>
</div>
   
  
  
    </div>
  );
}

export default Hero;
