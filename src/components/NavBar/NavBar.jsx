import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';

const NavBar = () => (
  <div className={styles.navBar}>
    <NavLink to="Home" className="navLink">Photo of the day!</NavLink>
    <NavLink to="Rover" className="navLink">Mars Rover Photos</NavLink>
  </div>
);

export default NavBar;
