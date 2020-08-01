import React from 'react';
import logo from '../../assets/images/logo.jpeg';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="LogoContainer">
        <a href="#home"><img src={logo} className="Logo" alt="logo" /></a>
      </div>
      <div className="LinksContainer">
        <a href="#home" className="HeaderLink">home</a>
        <a href="#about" className="HeaderLink">about</a>
        <a href="#team" className="HeaderLink">team</a>
        <a href="#artists" className="HeaderLink">artists</a>
        <a href="#events" className="HeaderLink">events</a>
        <a href="#work" className="HeaderLink">work</a>
        <a href="#contacts" className="HeaderLink">contact</a>
      </div>
    </div>
  )
}

export default Header
