import React from "react";

import { Features, Mission, Header } from "./containers";
import "./App.css";


const Home = () => {
  return (
      <div className="Home">
        <div className="gradient__bg">
          <Header />
        </div>
        <Features />
        <Mission />
    </div>
  );
};

export default Home;
