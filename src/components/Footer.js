import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="footer--content--1">
          <h3>FAQs</h3>
          <h3>Contact Us</h3>
        </div>
        <div className="footer--content--2">
          <h3>Privacy Policy</h3>
          <h3>Press Kit</h3>
        </div>
        <div className="footer--content--3">
          <h3>Install Guide</h3>
        </div>
        <div className="footer--icons">
          <FaFacebookF />
          <BsTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="last">
        <h4>Coded by mackson</h4>
        <p>
          For collaboration or business email me:{" "}
          <span>mugishamackson15@gmail.com</span>
        </p>
        <p>or click on the twitter icon to get in touch with me on twitter</p>
        <a href="https://twitter.com/Mackson_4">
          <BsTwitter className="last--icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
