import React, { useState, useCallback } from 'react';
import { Link,useParams } from 'react-router-dom';
const  History_Each_copy = props=> {
     const uid = useParams().uid;
     const did = props.driver_id;

    
        return(
        <li className="Attendee_item">
        <div className="Attendee_info" >
             <Link to={`/rider/booking/${uid}/${did}`}>
            <div className="Attendee_Name">
                 <h1>Trip ID:{props._id} </h1>
            </div>
            <div className="Attendee_Name">
                 <h1>Ride ID:{props.driver_id} </h1>
            </div>
            <div className="Attendee_Name">
                 <h1>availability{props.availability} </h1>
            </div>
            </Link>
            
      
           
        </div>
        </li>);
   

    

}

export default History_Each_copy;
