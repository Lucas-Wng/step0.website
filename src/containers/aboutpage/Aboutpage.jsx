import React from "react";
import "./aboutpage.css";

function Aboutpage() {
    return (
        <div className="step0_aboutpage">
            <div className="step0_aboutpage-heading">
                <h1 className="gradient__text">About</h1>
            </div>
            <div className="step0_aboutpage-content">
                <h3>Allan Huang</h3>
                <p>
                    Hi! My name is Allan Huang. I have years of experience
                    coaching / managing in multiple game titles which include
                    Valorant and Overwatch. I have been on multiple high ranking
                    teams with players playing consistently in top500 / Radiant.
                    Specifically, I have coached Shikigami in Overwatch, a 4.5k+
                    team as well as managed Area Of Effect in Valorant, a team
                    that practices against tier 1 teams like Cloud9, The Guard,
                    etc.{" "}
                </p>

                <h3>Lucas Wang</h3>
                <p>
                    Hi I'm Lucas Wang, creator of this website! I am an avid
                    programmer with 4+ years of web development experience. I am
                    experienced in python, java, c++, html, css, react and
                    jupyter notebook. Some of my work includes creating a music
                    recommendation that uses Spotify API to generate music
                    recommendations for the user. I have also created a tool for
                    musicians to learn more about music theory and identify
                    chords.{" "}
                </p>
                <h3>Why we started Step 0</h3>
                <p>
                    Throughout our experience with gaming, we have been exposed
                    to the damages to mental health that video games can cause.
                    During Allan's time as a coach and a manager for game titles
                    like Overwatch and Valorant, he felt as though everyone was
                    suffering through problems mentally and wanted to make a
                    change. However, while interacting with our classmates in
                    the International Baccalaureate program, we again noticed
                    the recurrent theme of mental health struggle. Due to the
                    highly stressful nature of the program, we realized the huge
                    overlap between online gamers and the students surrounding
                    us. As an organization, we pride ourselves in being
                    compassionate and look forward to helping the ones in need.
                    So when we noticed the mental health crisis affecting our
                    close friends, we felt compelled to make it a difference.
                    Thus we created Step 0, symbolizing that mental health
                    should be a step taken before pursuing anything else.
                </p>
                <h3>Allan's Coaching Works</h3>
                <div className="step0_aboutpage-content-container">
                    <div className="step0_aboutpage-content-videos">
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/lFrt1ts21nQ"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/HP2dcV407cg"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/QqXmmqfEs88"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/u6VO5QT1P7c"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/NUOUB3nCVzY"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/dyngpcEkNXU"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/YqzaMFIB6qY"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/OCX6PO-mVE4"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/PfGzdsjswLI"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutpage;
