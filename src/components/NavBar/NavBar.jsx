import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';
import nasaLogo from './nasa_logo.png';

const NavBar = () => (
  <nav className="navBar">
    <img className="navBar__logo" src={nasaLogo} alt="Logo" />
    <article className="navBar__linksContainer">
      <NavLink to="Home" className="links">Home</NavLink>
      <NavLink to="Apod" className="links">Photo of the day!</NavLink>
      <NavLink to="Rover" className="links">Mars Rover Photos</NavLink>
    </article>
  </nav>
);

export default NavBar;
