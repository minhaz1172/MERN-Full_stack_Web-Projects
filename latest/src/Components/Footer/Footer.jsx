import React from 'react';
import './Footer.css';

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import logo from '../Assets/e-logo.jpg';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer bg-white text-dark py-4">
      <div className="container text-center">
        <div className=" image d-flex">
          <img src={logo} alt='' />
        <p className="fw-bold fs-4 mt-3">SHOPPER</p>
        </div>
        {/* Footer Links */}
        <ul className="footer-links list-unstyled d-flex justify-content-center gap-4 mb-3">
          <li><a href="#" className="text-dark text-decoration-none">Company</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Products</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Offices</a></li>
          <li><a href="#" className="text-dark text-decoration-none">About</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
      </ul>

        {/* Social Icons */}
        <div className="footer-social-icon d-flex justify-content-center gap-3 my-3">
          <FaInstagram className="fs-4" />
          <FaFacebook className="fs-4" />
          <FaSquareWhatsapp className="fs-4" />
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright mt-4">
          <hr className="bg-light" />
          <p className="mb-0">Copyright © 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
