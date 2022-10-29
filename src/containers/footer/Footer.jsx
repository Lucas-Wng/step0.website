import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="step0__footer section__padding">
      <div className="step0__footer-links">
        <div className="step0__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="step0__footer-links_div">
          <h4><Link to="/">Step 0</Link></h4>
          <p><Link to="/blog">Blog</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/partnership">Partnership</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer