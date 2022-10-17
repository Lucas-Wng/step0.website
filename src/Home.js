import React from "react";

import { Blog, Features, About, Header, Discord } from "./containers";
import { CTA} from "./components";
import "./App.css";


const Home = () => {
  return (
      <div className="Home">
        <div className="gradient__bg">
          <Header />
        </div>
        <Features />
        <About />
        <Blog />
    </div>
  );
};

export default Home;
