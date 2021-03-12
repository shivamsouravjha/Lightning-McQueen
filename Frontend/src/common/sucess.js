import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const  Driver_login = ()=>{
    const did = useParams().did;
    return (   
        <h2>{did} </h2>

    );
  
};
 
export default Driver_login;