// src/components/Header.js

import React, { useEffect } from 'react';
import { animateHeader, animateNavbarLinks, animateLionLinks } from '../css/animation'; // Adjust path as per your file structure
import '../css/head.css';


export const Header = () => {
  useEffect(() => {
    animateHeader();
    animateNavbarLinks();
    animateLionLinks();
  }, []);

  return (
    <>
      <h1>Welcome to the Zoo</h1>
      <div className='header-container'>
        <nav className='navbar'>
          <a href="Home">Home</a>
          <a href="About">About us</a>
          <a href="Animals">Adoption</a>
          <a href="Membership">Become a member</a>
          <a href="Tickets">Book A Ticket</a> {/* Adjusted href for unique IDs */}
        </nav>
        <div className='lion'>
          <a href="Login">Log in</a>
          <a href="Register">Register</a>
        </div>
      </div>
    </>
  );
};
