import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch, FaUserCircle, FaCog, FaFontAwesomeLogoFull } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png'
interface HeaderProps {
  title: string;
}
const Header: React.FC <HeaderProps> =({ title })=> {
  return (
    <header className="header">
      <div className="header-left">
      <img src= {logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <div className="search-bar">
          
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search notes..." />
        </div>
      </div>
      <div className="header-right">
        <FaUserCircle className="header-icon" />
        <FaCog className="header-icon" />
      </div>
    </header>
  );
};

export default Header;