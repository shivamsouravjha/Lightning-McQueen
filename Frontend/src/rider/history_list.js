import React from 'react';
import History_Each from './history_each';
const  History_list = props => {
  if(!props.items.length)
  {
    return(
      <div>
        <h1>No events as of now!</h1>
      </div>
    );
  }
  return(
    <ul>
      {props.items.map(events=>(
      <History_Each key={events._id}
       _id={events._id}
       rider_id={events.rider_id}
       driver_id={events.driver_id}
       initial_rider_location={events.initial_rider_location}
       initial_driver_location={events.initial_driver_location}
       destination={events.destination}
       status={events.status}
      />))}
    </ul>
  );
}

export default History_list;
