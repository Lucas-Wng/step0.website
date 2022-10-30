import React from "react";
import "./partnership.css";
import {
  pure_degree_image1,
  pure_degree_image2,
  pure_degree_image3,
  pure_degree_image4,
  pure_degree_image5,
  pure_degree_image6,
  pure_degree_image7,
  pure_degree_image8,
  pure_degree_image9,
  pure_degree_image10,
  pure_degree_image11,
  pure_degree_image12,
  pure_degree_image13,
  pure_degree_image14,
  pure_degree_image15,
  pure_degree_image16,
  pure_degree_image17,
  pure_degree_image18,
  pure_degree_image19,
  pure_degree_image20,
  pure_degree_image21,
} from "./imports";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Partnership() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="step0_partnership">
      <div className="step0_partnership-header">
        <h1 className="gradient__text">Our Partnership with Puredegree</h1>
      </div>
      <div className="step0_partnership-content">
        <div className="step0_partnership-content-text">
          <p>
            We are proudly partnered with Puredegree educational center, an
            afterschool holistic tutor program! We share and showcase the
            importance of mental health. Especially having the similar target
            demographic of young teen gamers, we understand the common theme of
            inadequate mental health and want to make a difference! Here are some photos with the activities of mental health in mind!
          </p>
        </div>
        <div className="step0_partnership-content-carousel">
          <Slider {...settings}>
            <div className="image">
              <img
                src={pure_degree_image1}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image2}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image3}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image4}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image5}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image6}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image7}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image8}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image9}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image10}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image11}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image12}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image13}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image14}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image15}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image16}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image17}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>

            <div className="image">
              <img
                src={pure_degree_image18}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image19}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image20}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
            <div className="image">
              <img
                src={pure_degree_image21}
                width="400"
                height="300"
                alt="pure_degree_image"
              ></img>
            </div>
          </Slider>
          <p>For more information contact puredegree@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
