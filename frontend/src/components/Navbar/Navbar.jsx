import React, { useState } from 'react';
import './Navbar.css';
import { useQuery, gql } from '@apollo/client';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };
  const {loading:load, error:err, data:speakerdata} = useQuery(gql`
    query Query {
      speakers {
        type
      }
    }`
  );
  if(load){
    return <div>Loading...</div>;
  }
  if(err){
    return <div>Error: {err.message}</div>;
  }
  const uniqueTypes = Array.from(new Set(speakerdata?.speakers.map((speaker) => speaker.type)));
  console.log(uniqueTypes);
  return (
    <nav className="navbar">
      <div className="flex items-center">
        <img src="logonitt.png" alt="Logo" className="h-16 w-auto mr-4" />
        <img src="agni.png" alt="Logo" className="h-16 w-auto" /> 
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('about')}>
            About <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'about' && (
            <ul className="dropdown">
              <li><a href="/about?agnis">About the AGNI-S</a></li>
              <li><a href="/about?nittrichy">About the NIT-Trichy</a></li>
              <li><a href="/about?ceesat">About the CEESAT</a></li>
              <li><a href="/committee">Organizing Committee</a></li>
              <li><a href="/">AGNI-S Theme</a></li>
              <li><a href="/dates">Important Dates</a></li>
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
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('speakers')}>
            Speakers <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'speakers' && (
            <ul className="dropdown">
              {uniqueTypes.map((type, index) => (
                <li key={index}>
                  <a href={`/speaker?${type}`}>{type}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><a href="/">Events</a></li>
        <li><a href="/sponshorship">Sponsorship</a></li>
        <li><a href="/">Publications</a></li>
        <li><a href="/venuecontact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

