import React, { useEffect, useState } from 'react';
const  Driver_Signup = ()=>{
    const [password,setPassword]=useState('');
    const [email,set_email]=useState('');
    const [phone,set_phone]=useState('');
    const [driver_name,set_driver_name]=useState('');
    const [car_number,set_car_number]=useState('');
    const [account,set_account]=useState('');
    const [lat,set_lat]=useState();
    const [lng,set_lng]=useState();
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const location ={lat,lng};
            const body={email,password,phone,driver_name,car_number,account,location};

            const response = await fetch("/driver/signup",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            const datainjson = await response.json();

            window.location =`/driver/login`;

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

                <label for="name" className="label">phone</label><br/>

				<input type="text" name="name" className="input" value={phone} 
                onChange={e =>set_phone(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">driver_name </label><br/>
				<input type="password" name="password" className="input" value={driver_name} 
                onChange={e =>set_driver_name(e.target.value)} required />  <br/><br/>

            <label for="name" className="label">Ecar_number </label><br/>
				<input type="text" name="name" className="input" value={car_number} 
                onChange={e =>set_car_number(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">account </label><br/>
				<input type="password" name="password" className="input" value={account} 
                onChange={e =>set_account(e.target.value)} required />  <br/><br/>

                <label for="name" className="label">lat </label><br/>
				<input type="text" name="name" className="input" value={lat} 
                onChange={e =>set_lat(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">lng </label><br/>
				<input type="password" name="password" className="input" value={lng} 
                onChange={e =>set_lng(e.target.value)} required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Driver_Signup;