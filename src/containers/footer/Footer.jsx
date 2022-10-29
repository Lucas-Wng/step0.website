import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";
import WidgetBot from '@widgetbot/react-embed'
const Footer = () => {
  return (
    <div className="step0__footer section__padding">
      <div className="step0__footer-links">
        <div className="step0__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Step 0</p>
        </div>

        <div className="step0__footer-links_div">
          <h4>Step 0</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer