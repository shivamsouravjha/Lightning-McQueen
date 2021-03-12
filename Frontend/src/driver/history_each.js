import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  History_Each = props=> {
        
    
        return(
        <li className="Attendee_item">
        <div className="Attendee_info">
            <div className="Attendee_Name">
                 <h1>Trip ID:{props._id} </h1>
            </div>
            <div className="Attendee_Name">
                 <h1>Ride ID:{props.rider_id} </h1>
            </div>
            <div className="Attendee_Name">
                 <h1>DriverID{props.driver_id} </h1>
            </div>
            <div className="Attendee_Name">
                <h1>Rider Location:{props.initial_rider_location.lat} {props.initial_rider_location.lng} </h1>
            </div>
            <div className="Attendee_Name">
            <h1>Driver Location:{props.initial_driver_location.lat} {props.initial_driver_location.lng}  </h1>
            
            </div>
            
            <div className="Attendee_Name">
            <h1>Destination Location:{props.destination.lat} {props.destination.lng} </h1>
         
            </div>
            <div className="Attendee_Name">
                 <h1>{props.status} </h1>
            </div>
           
        </div>
        </li>);
   

    

}

export default History_Each;
