import React from "react";

import { Features, Mission, Header, Discord } from "./containers";
import "./App.css";


const Home = () => {
  return (
      <div className="Home">
        <div className="gradient__bg">
          <Header />
        </div>
        <Features />
        <Mission />
        <Discord />
    </div>
  );
};

export default Home;
