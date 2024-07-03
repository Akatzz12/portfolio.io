import React from 'react'
import Navbar from "../components/Navbar";

import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
    </div>
  )
}

export default Contact