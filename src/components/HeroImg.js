import './HeroImgStyles.css'

import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='into-img' 
        src={IntroImg} alt='IntroImg'/>
    </div>
    <div className='content'>
        <p>HELLO, THIS IS KAPILESHWOR RAY AMAT</p>
        <h1>SOFTWARE ENGINEER </h1>
        <h2> I am currently involved in Machine Learning and Artificial Intelligence Research  </h2>
    <div>
        <Link to='/project'
        className='btn'>
            Projects
            </ Link>

        <Link to='/research'
        className='btn btn-light'>
            Research
            </ Link>
    </div>
    </div>
  </div>
    
  
}

export default HeroImg