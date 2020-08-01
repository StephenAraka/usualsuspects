import React from 'react';
import './ContactSection.css';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';

const ContactSection = () => {
  return (
    <div className="ContactSection">
      <Instagram className="ContactIcon" />
      <Facebook className="ContactIcon" />
    </div>
  )
}

export default ContactSection;
