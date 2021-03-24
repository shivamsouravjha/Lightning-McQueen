import React from 'react';
import { Link } from 'react-router-dom';
import './HeadLinks.css';

const HeadLinks = props => {
  return<div className="head-links-div"> <ul className="head-links">
    <li>
    <Link to={`/riderini`}>CUSTOMER</Link>
    </li>
    <li>
    <Link to={`/driverini`}>SERVICEMAN</Link>
    </li>
  
  </ul></div> 
};

export default HeadLinks;