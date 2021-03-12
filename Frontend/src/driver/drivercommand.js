import React, { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
const  Driver_command = ()=> {
    const did = useParams().did;


  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/driver/${did}/availability`}> <button className="admin_div" >availability</button></Link></li>
      <li> <Link to={`/driver/${did}/update_location`}> <button className="admin_div" >update_location</button></Link></li>
      <li> <Link to={`/driver/${did}/historydid`}> <button className="admin_div" >history_did</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Driver_command;