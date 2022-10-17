import React from "react";
import { Navbar } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogpage from "./containers/blog/Blogpage";
import Blogpost from "./containers/blog/Blogpost";
import ErrorPage from "./components/Errorpage";
import { Contact, Footer } from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:id" element={<Blogpost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
