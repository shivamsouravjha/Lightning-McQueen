import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './initial.css';
const  main_page = ()=> {
  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/rider/login`}> <button className="admin_div" >Rider</button></Link></li>
      <li> <Link to={`/driver/login`}> <button className="user_div" >Driver</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default main_page;