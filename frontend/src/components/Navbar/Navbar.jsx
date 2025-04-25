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
  const {loading:speakerload, error:speakererr, data:speakerdata} = useQuery(gql`
    query Query {
      speakers {
        type
      }
    }`
  );
  
  if(!speakerdata)return <div>NO data</div>
  const uniqueSpeakerTypes = Array.from(new Set(speakerdata?.speakers.map((speaker) => speaker.type)));
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logonitt.png" alt="Logo" className="logo1" />
        <img src="agni.png" alt="Logo" className="logo2" /> 
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
              <li><a href="/about?dee">About the DEE</a></li>
              
              <li><a href="/themes">AGNI-S Theme</a></li>
              <li><a href="/dates">Important Dates</a></li>
            </ul>
          )}
        </li>
        <li><a href="/authors">Authors</a></li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('committees')}>
            Committees <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'committees' && (
            <ul className="dropdown">
              <li><a href="/committee?Organising Committee">Organising Committee</a></li>
              <li><a href="/committee?Technical Committee">Technical Committee</a></li>
            </ul>
          )}
        </li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('awards')}>
            Awards <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'awards' && (
            <ul className="dropdown">
              <li><a href="/paperaward">Best Paper Award</a></li>
              <li><a href="/posteraward">Best Poster Award</a></li>
            </ul>
          )}
        </li>
        <li onMouseLeave={closeDropdown}>
          <a href="#" onMouseEnter={() => handleDropdown('speakers')}>
            Speakers <span className="arrow">&#9662;</span>
          </a>
          {activeDropdown === 'speakers' && (
            <ul className="dropdown">
              {uniqueSpeakerTypes.length == 0 && (
                <li >
                  <h4 className='text-black'>Yet to be Announced..</h4>
                </li>
              )}
              {uniqueSpeakerTypes.length !== 0 && uniqueSpeakerTypes.map((type, index) => (
                <li key={index}>
                  <a href={`/speaker?${type}`}>{type}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><a href="/events">Events</a></li>
        <li><a href="/sponshorship">Sponsorship</a></li>
        <li><a href="/publications">Publications</a></li>
        <li><a href="/venuecontact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

