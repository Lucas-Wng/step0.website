import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import trophy from "../../assets/esports.jpg";

const featuresData = [
  {
    title: 'Increase Your Rank',
    text: 'Good mental health will help you avoid tilting and increase your enjoyment of the game. These will increase your motivation to climb',
  },
  {
    title: 'Improve your Mental Health',
    text: 'Our services are targeted towards improving the accesiblity of mental health resources for gamers',
  },
  {
    title: 'Improve your happiness',
    text: 'Maintaining good mental health is instrumental to achiving happiness. Good mental health can help avoid depression and overal loss of motivation',
  },
  {
    title: 'More accessible than traditional methods',
    text: 'Traditional treatments are outdated and not suited towards solving the problems of the internet generation. Traditional methods are harder to access because they often have high costs and long waiting times which leaves many people without treatment',
  },
];

const Features = () => (
  <div className="step0__features section__padding" id="features">
    <div className="step0__features-heading">
      <h1 className="gradient__text">Mental Health for Gamers</h1>
      {/* <div className='step0__features-heading-buttons'>
        <button>adfasdfasfasdfasdfasdf</button>
        <button>Book an Appointment</button>
      </div> */}
      <img src={trophy} alt="trophy" />
    </div>
    <div className="step0__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    
  </div>
  
);

export default Features;