import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="step0__navbar">
      <div className="step0__navbar-links">
        <div className="step0__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="step0__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#resources">Resources</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
          <p>
            <a href="#astep0">About</a>
          </p>
        </div>
      </div>
      <div className="step0__navbar-contact">
        <button type="button">Contact</button>
      </div>
      <div className="step0__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="step0__navbar-menu_container scale-up-center">
            <div className="step0__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#resources">Resources</a>
              </p>
              <p>
                <a href="#blog">Blog</a>
              </p>
              <p>
                <a href="#astep0">About</a>
              </p>
            </div>
            <div className="step0__navbar-menu_container-links-contact">
              <button type="button">Contact</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
