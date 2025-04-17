import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logonitt.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('about')}>
            About <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'about' && (
            <ul className="dropdown">
              <li><a href="/">About the AGNI-S</a></li>
              <li><a href="/">About the NIT-Trichy</a></li>
              <li><a href="/">About the CEESAT</a></li>
              <li><a href="/">Organizing Committee</a></li>
              <li><a href="/">AGNI-S Theme</a></li>
              <li><a href="/">Important Dates</a></li>
              <li><a href="/">Tourist Attraction</a></li>
            </ul>
          )}
        </li>
        <li><a href="/">Authors</a></li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('awards')}>
            Awards <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'awards' && (
            <ul className="dropdown">
              <li><a href="/">Best Paper Award</a></li>
              <li><a href="/">Best Poster Award</a></li>
            </ul>
          )}
        </li>
        <li><a href="/">Speakers</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">Sponsorship</a></li>
        <li><a href="/">Publications</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

