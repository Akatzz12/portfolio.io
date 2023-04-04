import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import PricingCard from '../components/PricingCard';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I am a Sofware Developer and Tester."/>
      <AboutContent/>
      <PricingCard />
    <Footer/>
    </div>
  )
}

export default About