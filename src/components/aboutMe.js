import React, { Component } from 'react';
import './aboutMe.css';
import '../Images/gorgeous.jpg';

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMe">
            <section id="About">
               <img src={require("../Images/gorgeous.jpg")} alt="Gorgeous Elsa"/>
               <h2 className="aboutMe-name">Hi, I'm Elsa</h2>
               <p>I am a San Antonio based Fitness Professional with 10 + years of experience in training and conditioning. 
                   I have transformed thousands of lives through fitness and healthy lifestyle changes.</p>
                <p>Outside of the gym or studio, I am also a Content Producer, Writer, Director and Consultant
               for infomercials, fitness products, marketing videos and related media.Somewhere along the way, I became and“ Influencer” and thanks to my background in journalism and media, I started blogging in 2009. In front of the camera, I am a Show Host, Fitness Lifestyle Model, and Spokesperson.</p>
                <p>I moved to San Antonio to pursue television and film production work.As my interest in fitness grew, my career goal became finding a way to fuse my two passions– production and fitness.It’ s been an amazing journey, and well worth the trip!</p>
                <p>I use my communication background to educate and motivate people towards a healthier life– one that embraces movement and getting a handle on their nutrition.I use my vast knowledge of fitness, plus my years of media experience, to help products create authentic content with value.</p>
            </section>
            </div>
        );
    }
}

export default AboutMe;