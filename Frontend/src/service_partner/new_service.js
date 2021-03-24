import React, { useEffect, useState } from 'react';
const  Rider_Signup = ()=>{
    const [zipcode,setzipcode]=useState();
    const [name,set_name]=useState();
    const [location,set_location]=useState();
    const [dob,set_dob]=useState();
    const [phone,set_phone]=useState();
    const [sex,set_sex]=useState('');
    const [password,set_password]=useState();
    const [aadhar,set_aadhar]=useState();
    const [email,set_email]=useState();
    const [skill,set_skill]=useState('');
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
               console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);
    console.log(aadhar);
    console.log(location);
     console.log(dob);
    console.log(sex);
    console.log(skill);
    console.log(zipcode);
            const body={zipcode,name, location,dob,phone,sex,password,aadhar,email,skill};

            const response = await fetch("https://taxibackendf.herokuapp.com/api/service/signup",{
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
    <label for="Email" className="label">Enter the Email</label><br/>
				<input type="email" name="name" className="Email" value={email} 
                onChange={e =>set_email(e.target.value)}
                placeholder="email@id.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                title="Please enter valid email" 
                 required />  <br/><br/>


			<label for="password" className="label">Enter the password! </label><br/>
				<input type="password" name="password" className="input" value={password} 
                onChange={e =>set_password(e.target.value)}
                placeholder="Password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                 required />  <br/><br/>


                <label for="Phone" className="label">Enter Phone</label><br/>
                <input type="tel" name="Phone" className="input" value={phone} 
                onChange={e =>set_phone(e.target.value)} 
                placeholder="9876543210" 
                pattern="[0-9]{10}"
                title="Must be 10 digit number"
                required />  <br/><br/>


			<label for="Name" className="label">Enter Name </label><br/>
				<input type="text" name="Name" className="input" value={name} 
                onChange={e =>set_name(e.target.value)}
                placeholder="Name" 
                 required />  <br/><br/>

            
			<label for="aadhar" className="label">Enter aadhar </label><br/>
				<input type="text" name="aadhar" className="input" value={aadhar} 
                onChange={e =>set_aadhar(e.target.value)}
                placeholder="AAdhar" 
                maxlength="12"
                minlength="12"
                title="Enter a Aadhar" required />  <br/><br/>

                
            <label for="DOB" className="label">Enter D.O.B </label><br/>
				<input type="date" name="DOB" className="input" value={dob} 
                onChange={e =>set_dob(e.target.value)} required />  <br/><br/>



			<label for="Sex" className="label">Enter Sex </label><br/>
                <select name="Sex" id="Sex" value={sex} onChange={e =>set_sex(e.target.value)}>
                    <optgroup label="Gender" >
                    <option  ></option>
                    <option  >Male</option>
                            <option >Female</option>
                    </optgroup>
    
                </select>

                <br/><br/>

                <label for="Skill" className="label">Enter Skill </label><br/>
                <select name="Skill" value={skill} onChange={e =>set_skill(e.target.value)}>
                <optgroup label="Choose Skill">
                <option ></option>

                            <option >masonry</option>
                            <option >building_material</option>
                            <option>demolition</option>
                            <option >wallcovering</option>
                            <option >survey</option>
                            <option >rennovation</option>
                            <option >hvac</option>
                            <option >framing</option>
                            <option >highway</option>
                            <option >plumbing</option>
                            <option >p_tools</option>
                            <option >roofing</option>

                    </optgroup>
    
                </select>  <br/><br/>
                 
                 <label for="Place" className="label">Enter Place </label><br/>
                 <input type="text" name="Place" className="input" value={location} 
                 onChange={e =>set_location(e.target.value)}
                 placeholder="Place" 
                 
                  required />  <br/><br/>


            <label for="Zipcode" className="label">Enter Zipcode </label><br/>
				<input type="text" name="Zipcode" className="input" value={zipcode} 
                onChange={e =>setzipcode(e.target.value)} 
                placeholder="000000" 
                pattern="[0-9]{6}"
                title="Enter a valid Zipcode"
                required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Rider_Signup;