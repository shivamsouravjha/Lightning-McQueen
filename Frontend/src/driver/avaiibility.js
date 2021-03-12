import React, { useEffect, useState } from 'react';
const  Locations = ()=>{
    const did = useParams().did;

    const [lng,set_lng]=useState('');
    const [lat,set_lat]=useState('');
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const location = {lng,lat};
            const body={location};

            const response = await fetch(`/avail/:${did}`,{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            const datainjson = await response.json();
            const did = datainjson.driver._id;


           window.location =`/driver/${did}`;
        }catch(err){
            console.log('Error')
        }

    }
    return (   
     <div className="admin_form_div">
		<h1 className="form_header">
			Hey Admin! </h1>
	
  <center>
	<form  action="/initial" id="admin_form"  name="admin_form" onSubmit={onSubmitform}>
    <label for="name" className="label">Enter your Lng! </label><br/>
				<input type="text" name="name" className="input" value={lng} 
                onChange={e =>set_lng(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">Enter the Lat! </label><br/>
				<input type="password" name="password" className="input" value={lat} 
                onChange={e =>set_lat(e.target.value)} required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Locations;