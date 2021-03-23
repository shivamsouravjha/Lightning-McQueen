import React from 'react';
import History_Each from './history_each copy';
const  History_list_copy = props => {
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
       driver_id={events.driver_id}
       availability={events.availability}
      />))}
    </ul>
  );
}

export default History_list_copy;
