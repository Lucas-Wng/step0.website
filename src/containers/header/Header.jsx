import React from "react";
import "./header.css";
import gamer from "../../assets/centerimg.png";

const Header = () => {
  return (
    <div className="step0__header section__padding" id="home">
      <div className="step0__header-content">
        
        <h1 className='gradient__text'>Step 0</h1>
        <p>Empowering 250+ gamers</p>
      </div>
      <div className="step0__header-image">
        <img src={gamer} alt="gamer" />
      </div>
    </div>
  );
};

export default Header;
