import React from "react";
import "./header.css";
import stadium from "../../assets/centerimg.png";

const Header = () => {
  return (
    <div className="step0__header section__padding" id="home">
      <div className="step0__header-content">
        <h1 className="gradient__text">Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
      </div>
      <div className="step0__header-image">
        <img src={stadium} alt="stadium" />
      </div>
      <div className='step0__header-content'>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>
        <h1 className='gradient__text'>Step 0</h1>

      </div>
    </div>
  );
};

export default Header;
