import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  main_page = ()=> {
  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/driver/signup`}> <button className="admin_div" >Admin</button></Link></li>
      <li> <Link to={`/driver/login`}> <button className="user_div" >User</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default main_page;