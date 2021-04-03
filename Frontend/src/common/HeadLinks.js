import React from 'react';
import { Link } from 'react-router-dom';
import './HeadLinks.css';

const HeadLinks = props => {
  return<div className="head-links-div"> <ul className="head-links">
    <li>
    <Link to={`/driverini`}>CUSTOMER</Link>
    </li>
    <li>
    <Link to={`/servini`}>SERVICEMAN</Link>
    </li>
  
  </ul>
  </div> 
};

export default HeadLinks;