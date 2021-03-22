import React, { useEffect, useState } from 'react';
const  Rider_login = ()=>{
    const [password,setPassword]=useState('');
    const [email,set_email]=useState('');
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={email,password};

            const response = await fetch("https://taxibackendf.herokuapp.com/api/rider/login",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            const datainjson = await response.json();
            const did = datainjson.rider._id;


           window.location =`/rider/${did}`;
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
    <label for="name" className="label">Enter your name! </label><br/>
				<input type="text" name="name" className="input" value={email} 
                onChange={e =>set_email(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">Enter the password! </label><br/>
				<input type="password" name="password" className="input" value={password} 
                onChange={e =>setPassword(e.target.value)} required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Rider_login;