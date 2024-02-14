import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="step0__navbar">
            <div className="step0__navbar-links">
                <div className="step0__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="step0__navbar-links_container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
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
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
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
