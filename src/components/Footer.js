import './FooterStyles.css'

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p> Jain Global Campus</p>
                            <p>Bengaluru, 562112</p>
                        </div>
                    </div>

                    <div className='phone'>
                        <h4> <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            +91-7296081178 </h4>
                    </div>
                    <div className='email'>
                        <h4> 
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            kapileshworray@gmail.com </h4>

                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p> Quick Learner, versatile, adaptable and
                        process -oriented engineer with understanding of problems. Dedicated to continuous
                        upgradation of skills and enhancement of the knowledge.
                    </p>
                    <div className='social'>
                     <FaFacebook size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                     <FaGithub size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                     <FaLinkedin size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer