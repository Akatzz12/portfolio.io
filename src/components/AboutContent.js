import './AboutContentStyles.css'

import React from 'react'
import profile from '../assets/profile.JPG'
import back from '../assets/back.jpeg'

const AboutContent = () => {
    return <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p> I am a BTECH. CSE(IOT) student at Jain University, Bengaluru.I posses good knowledge of programming langauges and the embedded systems. I am currently working as the Test Analyst for Evangelist Softwares.</p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={profile} className='img' alt='true' />
                </div>
                <div className='img-stack bottom'>
                    <img src={back} className='img' alt='true' />
                </div>
            </div>
        </div>
    </div>



}

export default AboutContent