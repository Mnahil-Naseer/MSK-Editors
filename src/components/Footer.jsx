import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <div className='footer'> <div className='line'></div></div>
                <div className="footer">
                    <p>© 2024 Copyright Reserved</p>
                    <div className="social-icons">
                        <a href="https://linkedin.com" >
                            <FaLinkedin size={25}  />
                        </a>
                        <a href="https://instagram.com" >
                            <FaInstagram size={25}  />
                        </a>
                        <a href="https://facebook.com">
                            <FaFacebook size={25}  />
                        </a>
                    </div>
                </div>
    </>
  )
}

export default Footer
