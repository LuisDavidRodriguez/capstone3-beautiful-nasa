import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';
import nasaLogo from './nasa_logo.png';

const HOME = 'Home';
const APOD = 'Apod';
const ROVER = 'Rover';
const MEDIA = 'Media';

const NavBar = () => (
  <nav className="navBar">
    <img className="navBar__logo" src={nasaLogo} alt="Logo" />
    <article className="navBar__linksContainer">
      <NavLink to={HOME} className="links">Home</NavLink>
      <NavLink to={APOD} className="links">Photo of the day!</NavLink>
      <NavLink to={ROVER} className="links">Mars Rover Photos</NavLink>
      <NavLink to={MEDIA} className="links">NASA Media</NavLink>
    </article>
  </nav>
);

export default NavBar;

export {
  HOME,
  APOD,
  ROVER,
  MEDIA,
};
