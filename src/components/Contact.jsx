import React from 'react';
import './Contact.css';
import logo from '../assets/img/blue1.1 2.png';

const Contact = () => {
  return (
      <div className="main-content">
        <div className="details">
          <img src={logo} alt="MSK Editors" className="contact-logo" />
          <h1>Software and Designing Company</h1>
          <p>Contact us today and learn how we can help bring your business to the next level with a custom software solution!</p>
          <p>+92 - 309 154 3115</p>
          <p>mskeditors@gmail.com</p>
        </div>

        <div className="chat-form">
          <h2>Let's Chat</h2>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Work Email" />
            <input type="text" placeholder="Contact" />
            <textarea placeholder="Your Message"></textarea>
            <div className='flex'><button type="submit">Send</button>
            <img src={logo} alt="MSK Logo" className="form-logo" /></div>
          </form>
        </div>
      </div>
  );
}

export default Contact;
