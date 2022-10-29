import React from "react";
import { Navbar2 } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogpage from "./containers/blog/Blogpage";
import Blogpost from "./containers/blog/Blogpost";
import ErrorPage from "./components/Errorpage";
import { Contact, Footer, Aboutpage, Partnership } from "./containers";
import WidgetBot from '@widgetbot/react-embed'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar2 />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:id" element={<Blogpost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <WidgetBot
        server="1019387494908842075"
        channel="1031724806611152976"
        width="800"
        height="600"
      /> */}
      <Footer />
    </div>
  );
};

export default App;
