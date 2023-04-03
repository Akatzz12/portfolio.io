import './PricingCardStyles.css'


import React from 'react'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> Programming Languages</h3>
                <span className='bar'></span>
                <p> C/C++ </p>
                <p> HTMLS/CSS/JavScript </p>
                <p> MERN Stack </p>
                <p> JAVA </p>
                <p> Python </p>
                <p> SQL/MYSQL </p>
         
                </div>

                <div className='card'>
                <h3> Software Testing</h3>
                <span className='bar'></span>
                <p>Atlessian Tools</p>
                <p> Selenium </p>
                <p> Appium </p>
                <p> Cucumber  </p>
                <p> Browserstack </p>
                <p> Robot Framework </p>
               
                
               

            </div>
        </div>
        </div>

  )
}

export default PricingCard