import React from 'react';
import './ContactSection.css';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="ContactSection">
      <a href="https://www.instagram.com/theusualsuspectsug" target="_blank" rel="noopener noreferrer"><Instagram className="ContactIcon" /></a>
      <a href="https://www.facebook.com/theusualsuspectsug" target="_blank" rel="noopener noreferrer"><Facebook className="ContactIcon" /></a>
    </div>
  )
}

export default ContactSection;
