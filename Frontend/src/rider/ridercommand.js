import React, { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
const  Main_page_user = ()=> {
    const uid = useParams().uid;
  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/rider/${uid}/end`}> <button className="admin_div" >end</button></Link></li>
      <li> <Link to={`/rider/${uid}/booking`}> <button className="admin_div" >booking</button></Link></li>
      <li> <Link to={`/rider/${uid}/history_uid`}> <button className="admin_div" >history_did</button></Link></li>

    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Main_page_user;