import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const  Rider_Signup = ()=>{
    const uid = useParams().uid;
    console.log(useParams().did);
    const rid = useParams().did;
    const [lat,set_lat]=useState();
    const [lng,set_lng]=useState();
    const [driver_id,set_driver_id]=useState('');
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
               
            const destination ={lat,lng};
            const body={driver_id,destination};

            const response = await fetch(`/booking/${uid}`,{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            const datainjson = await response.json();

            window.location =`/driver/${uid}`;

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

    <label for="name" className="label">Enter your location lat ! </label><br/>
				<input type="text" name="name" className="input" value={lat} 
                onChange={e =>set_lat(e.target.value)} required />  <br/><br/>


                <label for="name" className="label">Enter your lng! </label><br/>
				<input type="text" name="name" className="input" value={lng} 
                onChange={e =>set_lng(e.target.value)} required />  <br/><br/>
                
         
                <label for="name" className="label">Copy the number below {rid}</label><br/>
				<input type="text" name="name" className="input" value={driver_id} 
                onChange={e =>set_driver_id(e.target.value)} required />  <br/><br/>
                
			
  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Rider_Signup;