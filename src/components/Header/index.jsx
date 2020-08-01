import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="LogoContainer">
        <img src={logo} className="Logo" alt="logo" />
      </div>
      <div className="LinksContainer">
        <Link to="/" className="HeaderLink">home</Link>
        <Link to="/" className="HeaderLink">about</Link>
        <Link to="/" className="HeaderLink">team</Link>
        <Link to="/" className="HeaderLink">artists</Link>
        <Link to="/" className="HeaderLink">events</Link>
        <Link to="/" className="HeaderLink">work</Link>
        <Link to="/" className="HeaderLink">contact</Link>
      </div>
    </div>
  )
}

export default Header
