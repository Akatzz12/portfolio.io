import React from 'react';
import './AboutContentStyles.css'; // Import CSS for styling

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>
                I am a recent graduate in Computer Science and Engineering from Jain University, Bangalore, having completed my undergraduate degree in June 2024. During my studies, I focused on various IoT projects and conducted research in machine learning and AI. For the past two years, I have been employed as a software engineer at Evangelist Software Pvt. Ltd., where I have applied my skills in software development and engineering
                </p>
            </div>
            <div className='right'>
                <h1>Research Interests</h1>
                <p>
                My primary research interests center around machine learning and AI, with a specific focus on developing IoT-enabled systems for enhanced data analytics and predictive modeling. I have hands-on experience in building and deploying IoT prototypes, integrating diverse sensors for real-time data collection, and leveraging machine learning algorithms to extract actionable insights from collected data. Currently, I am actively engaged in advancing machine learning techniques and exploring applications in general AI research
                </p>
            </div>
        </div>
    );
};

export default AboutContent;
