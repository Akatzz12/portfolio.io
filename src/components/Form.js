import React from 'react';
import './FormStyles.css';
import profilePhoto from '../assets/mine.jpeg'

const ContactInfo = () => {
  return (
      <div className='contact-info'>
          <h2>Kapileshwor Ray Amat</h2>
          <img src={profilePhoto} alt='Profile' className='profile-photo' />
          <div className='info-item'>
              <p><strong>Phone:</strong> +91-7296081178 / +977-9860371932</p>
          </div>
          <div className='info-item'>
              <p><strong>Email:</strong> kapileshworray@gmail.com</p>
          </div>
          <div className='info-item'>
              <p>
                  <strong>LinkedIn:</strong>&nbsp;
                  <a href='http://www.linkedin.com/in/kapilray' target='_blank' rel='noopener noreferrer'>LinkedIn Profile</a>
              </p>
          </div>
          <div className='info-item'>
              <p>
                  <strong>GitHub:</strong>&nbsp;
                  <a href='https://github.com/Akatzz12' target='_blank' rel='noopener noreferrer'>GitHub Profile</a>
              </p>
          </div>
      </div>
  );
};


export default ContactInfo;
