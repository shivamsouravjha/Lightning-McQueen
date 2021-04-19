import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ser1 from "../images/ser1.png";
import ser2 from "../images/ser2.png";
import ser3 from "../images/ser3.png";
import ser4 from "../images/ser4.png";
import ser5 from "../images/ser5.png";
import ser6 from "../images/ser6.png";
import "./services.css";
const  Services = ()=> {
    return(
  
        <div className="services">
            <span className="service_span">SERVICES WE PROVIDE</span>

      <div className="ser_des"><img className="ser_icon" src={ser1} /><br/>AC repair</div>
      <div className="ser_des"><img className="ser_icon" src={ser2} /><br/>Appliances repair</div>
      <div className="ser_des"><img className="ser_icon" src={ser3} /><br/>Electrical repair</div>
      <div className="ser_des"> <img className="ser_icon" src={ser4} /><br/>HomeCare repair</div>
      <div className="ser_des"><img className="ser_icon" src={ser5} /><br/>Plumbing Services</div>
      <div className="ser_des"><img className="ser_icon" src={ser6} /><br/>Construction</div>
      
    
        
      
    </div>
    );
  }
  
  export default Services;