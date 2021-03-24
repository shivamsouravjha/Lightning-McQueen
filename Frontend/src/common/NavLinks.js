import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>HOME</NavLink>
    </li>
    <li>
      <NavLink to="/">ABOUT US</NavLink>
    </li>
    <li>
      <NavLink to="/">SERVICES</NavLink>
    </li>
    <li>
      <NavLink to="/">BLOG</NavLink>
    </li>
    <li>
      <NavLink to="/">CONTACT US</NavLink>
    </li>
  </ul>
};

export default NavLinks;