import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.png";
import './navbar2.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="step0__navbar">
      <div className="step0__navbar-links">
        <div className="step0__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="step0__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/blog">Blog</Link></p>
          <p><Link to="/about">About</Link></p>
        </div>
      </div>
      <div className="step0__navbar-sign">
        <p>Sign in</p>
        <button type="button">Contact</button>
      </div>
      <div className="step0__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="step0__navbar-menu_container scale-up-center">
          <div className="step0__navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><Link to="/about">About</Link></p>
          </div>
          <div className="step0__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;