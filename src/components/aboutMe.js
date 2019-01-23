import React, { Component } from 'react';
import './aboutMe.css';
import '../Images/gorgeous.jpg';

class AboutMe extends Component {
    render() {
        return (
            <div id="About">
                <img src={require("../Images/gorgeous.jpg")} alt="Gorgeous Elsa" className="image-elsa"/>
                <h2 className="aboutMe-name">Hi, I'm Elsa</h2>
               <p>I am a San Antonio based Fitness Professional with 10 + years of experience in training and conditioning. 
                   I have transformed thousands of lives through fitness and healthy lifestyle changes.</p>
                <p>Outside of the gym or studio, I am a mother to five beautiful children and a wife to my husband of 7 years of wonderful marriage. 
                    Somewhere along the way, I became an “Influencer” and "Advocate" to better living for all working mothers.</p>
                <p>I moved to San Antonio from Laredo, MX to pursue a better life for my family and I. As my interest in fitness grew, my career goal became to finding a way to fuse my two passions – healthy eating and fitness. 
                   <strong> It’s been an amazing journey, and well worth the trip!</strong></p>
                <p>I use my background to educate and motivate people towards a healthier life style – one that embraces movement and getting a handle on their nutrition. 
                    I use my vast knowledge of fitness to help people change their lives and get back what was lost.</p>
            </div>
        );
    }
}

export default AboutMe;