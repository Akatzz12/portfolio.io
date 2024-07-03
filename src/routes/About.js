import React from 'react'
import Navbar from "../components/Navbar";

import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import PricingCard from '../components/PricingCard';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I am a Sofware Developer and Machine Learning Engineer."/>
      <AboutContent/>
      <PricingCard />
   
    </div>
  )
}

export default About