import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services.js'; 
import image1 from "../images/home1-slide11.jpeg";
import banner from "../images/banner1.jpg";

import './initial.css';
const  main_page = ()=> {
  return(

  <div>

    
<div className="bg-img">
    
   <img className="headerimg" src={image1} alt="image"  />
   <div className="bottom-right"><span className="span_heading1">SEWAKAR</span><span className="span_heading2">THIS PLATFORM</span> WILL ACT AS A BRIDGE BETWEEN THE JOB SEEKER AND THE JOB PROVIDER<br/>
   <a href="tel:+919769830037" target=""><button className="enquiry"><span class="fa fa-phone fa-lg"></span><b> Enquiry now</b></button></a></div>
  
   </div>
      
<div>
  <Services/>
      
    </div>
    <img src={banner} className="bannerimg"></img>

  </div>
  );
}

export default main_page;