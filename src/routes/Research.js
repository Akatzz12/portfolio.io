import React from 'react'
import Navbar from "../components/Navbar";

import HeroImg2 from '../components/HeroImg2';
import Research from '../components/ResearchText';



const research = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Publications & Research." text="Some of my most recent publication and recent research work" />
      <Research/>
    
    </div>
  )
}

export default research