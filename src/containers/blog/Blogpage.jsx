import React from "react";
import Article from "../../components/article/Article";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
} from "./imports";
import "./blogpage.css";
import { Link } from "react-router-dom";

const Blogpage = () => (
  <div className="step0__blogpage">
    <div className="step0__blogpage-heading">
      <h1 className="gradient__text">Blog</h1>
    </div>
    <div className="step0__blogpage-container">
      <div class="item">
        <Link to="/blog/1">
          <Article imgUrl={blog01} text="Inconsistency" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/2">
          <Article imgUrl={blog02} text="Slumps" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/3">
          <Article imgUrl={blog03} text="VOD Review" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/4">
          <Article imgUrl={blog04} text="Goal Setting" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/5">
          <Article imgUrl={blog05} text="Your rank is not your worth" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/6">
          <Article
            imgUrl={blog06}
            text="Addiction vs Dedication vs Intrinsic Motivation"
          />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/7">
          <Article imgUrl={blog07} text="Aim Trainers" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/8">
          <Article imgUrl={blog08} text="30-30-40 Rule" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/9">
          <Article imgUrl={blog09} text="Getting Tilted" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/10">
          <Article imgUrl={blog10} text="Space Control" />
        </Link>
      </div>
      <div class="item">
        <Link to="/blog/11">
          <Article imgUrl={blog11} text="Voice Chat" />
        </Link>
      </div>
    </div>
  </div>
);

export default Blogpage;
