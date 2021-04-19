import React from 'react';
import { NavLink } from 'react-router-dom';

import '../bootstrap/css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/animate.min.css';
import '../css/style.css';




const NavLinks = props => {
return <nav id="navbar-section" class="navbar navbar-default navbar-static-top navbar-sticky" role="navigation">
  <div class="container">

<div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>     
</div> 
  <div id="navbar-spy" class="collapse navbar-collapse navbar-responsive-collapse">
   <ul class="nav navbar-nav pull-right">
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
  </ul> </div> </div> </nav> 
};

export default NavLinks;

