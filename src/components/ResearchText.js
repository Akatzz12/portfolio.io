import React from 'react';
import './ResearchText.css'; // Ensure this path is correct

const publications = [
    {
        title: "QuakeGuard Insight: An IoT-Enabled Machine Learning System",
        details: "K. R. Amat, A. Baitha, B. AdhikariChhetri, N. Bohara, C. Bista and H. S. Shreenidhi, 2024 4th International Conference on Data Engineering and Communication Systems (ICDECS), Bangalore, India, 2024, pp. 1-5, doi: 10.1109/ICDECS59733.2023.10502754",
        link: "https://ieeexplore.ieee.org/document/10502754/"
    },
    {
        title: "ClimbSafe Navigator: IoT-Enabled High-Mountain Health and GPS Tracking",
        details: "Kapileshwor Ray Amat, Aashutosh Baitha, Bhabishya AdhikariChhetri, Chirayou Bista, Neha Bohara, Shreenidhi H.S,“ClimbSafe Navigator: IoT-Enabled High-Mountain Health and GPS Tracking”, 2023 IEEE International Interdisciplinary Humanitarian Conference for Sustainability (IIHC-2023) ",
        link: "https://ieee.org/upcoming-paper-2/"
    }
];

const researchWorks = [
    {
        title: "News Research using Langchain",
        details: [
            "I have developed a news research application using LangChain and OpenAI's LLM API. This application leverages LangChain for natural language processing tasks and integrates OpenAI's LLM API for generating summaries and analyzing news articles. It aims to provide users with curated insights and summaries from a diverse range of sources, enhancing information retrieval and analysis capabilities.",
        ]
    },
    {
        title: "Autonomous Driving Car",
        details: [
            "I have developed a prototype of an autonomous driving car controlled via both WiFi and Bluetooth technologies. The prototype integrates sensors such as LiDAR, cameras, and ultrasonic sensors for real-time environment perception. Using a combination of computer vision algorithms and machine learning models, the car navigates autonomously, avoiding obstacles and following predefined routes. The WiFi and Bluetooth capabilities enable remote control and monitoring of the vehicle's status and operations, contributing to its functionality and safety.",
        ]
    },
    {
        title: "QuakeGuard Insight: An IoT-Enabled Machine Learning System",
        details: [
            "I developed and implemented advanced machine learning models to analyze seismic data and predict earthquake occurrences, contributing to the early detection and alerting capabilities of QuakeGuard Insight. Additionally, I designed and integrated an IoT prototype and framework, utilizing a network of sensors such as accelerometers to collect real-time seismic data for enhanced monitoring and analysis.",
        ]
    },
    {
        title: "IoT Enables Solar Power System for Energy Conservation",
        details: [
            "I developed an IoT prototype for better utilization of solar power energy using LDR sensors and servo motors. I studied various methods to optimize solar power energy, increase the efficiency of solar panels, and explored methods to make solar panels movable for maximizing light energy absorption..",
         
        ]
    },
    {
        title: "ClimbSafe Navigator: IoT-Enabled High-Mountain Health and GPS Tracking",
        details: [
            "I developed an IoT prototype for high-altitude climbers to track their health vitals using DHT11 and heartbeat sensors. The prototype integrates GPS and a GSM modem for real-time location tracking of climbers. I explored methods to improve battery life and enhance network connectivity at high altitudes. Additionally, I integrated the IoT prototype with a cloud environment to send data to ThingSpeak.",
          
        ]
    }
];

const ResearchText = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Publications</h1>
            <div className='publications-list'>
                {publications.map((pub, index) => (
                    <div key={index} className='publication-item'>
                        <h2 className='publication-title'>
                            {index + 1}. {pub.title}
                        </h2>
                        <p className='publication-details'>
                            {pub.details}
                        </p>
                        <a href={pub.link} className='publication-link' target='_blank' rel='noopener noreferrer'>
                            Read more
                        </a>
                    </div>
                ))}
            </div>

            <h1 className='project-heading'>Research Work</h1>
            <div className='research-work-list'>
                {researchWorks.map((work, index) => (
                    <div key={index} className='research-work-item'>
                        <h2 className='research-work-title'>
                            {index + 1}. {work.title}
                        </h2>
                        <p className='research-work-date'>
                            {work.date}
                        </p>
                        <ul className='research-work-details'>
                            {work.details.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchText;
