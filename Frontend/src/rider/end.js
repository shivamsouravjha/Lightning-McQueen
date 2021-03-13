import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const  End = ()=>{
    const uid = useParams().uid;

    console.log(uid);
    const availability = async e =>{
        console.log("did");

        e.preventDefault();
        try{
           
            const response = await fetch(`/booking/end/${uid}`,{
                method:"POST",headers:{"Content-Type":"application/json"}
            })
            const datainjson = await response.json();
            window.location =`/success`;

        }catch(err){
            console.log('Error')
        }

    }

    return (   
<div className="admin_form_div">
		<h1 className="form_header">
			Hey Admin! </h1>
	
  <center>
	<form  action="/initial" id="admin_form"  name="admin_form" onSubmit={availability}>
  			<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>    );
  
};
 
export default End;