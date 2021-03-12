import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './initial.css';
const  main_page = ()=> {
  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/riderini`}> <button className="rider_div" >Rider</button></Link></li>
      <li> <Link to={`/driverini`}> <button className="driver_div" >Driver</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default main_page;