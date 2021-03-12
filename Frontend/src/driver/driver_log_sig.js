import React, { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
const  Driver_log_sig = ()=> {


  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/driver/login`}> <button className="admin_div" >Login</button></Link></li>
      <li> <Link to={`/driver/signup`}> <button className="admin_div" >Signup</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Driver_log_sig;