import React from 'react';
import './AboutUs.css';  // Link to your CSS file for styling
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePic from '../assets/img/Mask group.png';  // Replace with actual profile image
import logo from '../assets/img/blue1.1 1.png'; // Replace with your logo

const AboutUs = () => {
  return (
    <>
    <div className="about-section">
      <div className="profile-card">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>M. Shamil Khan</h2>
        <p style={{ fontSize: 'large', fontWeight: 'lighter', color: 'white' }}>Founder & CEO</p>
        <p>
          Contact us today and learn how we can help bring your business to the
          next level with a custom software solution!
        </p>
        <p style={{ fontSize: 'large', fontWeight: 'lighter', color: 'white' }}>My Profiles</p>
        <div className="social-icons">
          <a href="https://linkedin.com">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://instagram.com">
            <FaInstagram className="icon" />
          </a>
        </div>

        <div className="contact-info">
          <p><FaPhone /> +92-309-154-3115</p>
          <p><FaEnvelope /> mskeditors@gmail.com</p>
        </div>
      </div>

      {/* Right Section: Company Details */}
      <div className="company-details">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <div className="company-text">
          <h3>INTRODUCTION</h3>
          <p>
            Contact us today and learn how we can help bring your business to the next
            level with a custom software solution!
          </p>
          <h3>WHAT WE DO?</h3>
          <p>
            We specialize in creating custom software solutions tailored to your
            business needs, providing innovative and scalable applications.
          </p>
          <h3>WORKFLOW</h3>
          <p>
            Our workflow ensures a smooth and iterative development process,
            ensuring high-quality results at every stage.
          </p>
          <h3>WHAT WE DO?</h3>
          <p>
            We specialize in creating custom software solutions tailored to your
            business needs, providing innovative and scalable applications.
          </p>
          <h3>WORKFLOW</h3>
          <p>
            Our workflow ensures a smooth and iterative development process,
            ensuring high-quality results at every stage.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
