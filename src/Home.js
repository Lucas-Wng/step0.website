import React from "react";

import { Blog, Features, Mission, Header, Discord } from "./containers";
import { CTA} from "./components";
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
