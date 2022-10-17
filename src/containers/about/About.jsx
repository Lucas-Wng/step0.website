import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="step0__about section__margin">
    {/* <div className="step0__about-heading">
      <h1 className="gradient__text"></h1>
    </div> */}
    <div className="step0__about-container">
      <Feature title="#2" text="Suicide is the second leading cause of death in young people aged 15-24 years" />
      <Feature title="1 in 5" text="of youth aged 9-17 years currently has a diagnosable mental health disorder" />
      <Feature title="1 in 2" text="of all serious adult psychiatric disorders start by age 14 years" />
      <Feature title="6-23 years" text="Treatment often does not begin for 6-23 years after onset" />
    </div>
    <div className="step0__about-feature" id="about">
      <Feature title="About Step 0" text="At step 0 we look forward to focusing on the overall progression of a competitive gamer with mental health as the primary focus. Especially with multiplayer online video games becoming more popular, this has led to an increased problem in mental health where players often feel inadequate. Our organization looks to improve the approach and mentality of these players to ensure a more consistent, smoother and sustainable improvement in these video games." />
    </div>
  </div>
);

export default About;