import React, { useEffect, useState } from 'react';
const  Rider_Signup = ()=>{
    const [step, setstep] = useState(1);
    const [formdata, setFormData] = useState({zipcode:"", email:"",name:"",location:"", dob:"",phone:"",sex:"", password:"",aadhar:"",village:"",post:"",ps:"",block:"",pnumber:""}); // use to hold input from user 
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
  //  console.log(phone);
   // console.log(password);
   // console.log(aadhar);
  //  console.log(location);
   ///  console.log(dob);
   // console.log(sex);
   /// console.log(zipcode);
            const zipcode=formdata.zipcode;
            const name=formdata.name;
            const location=formdata.location;
            const dob=formdata.dob;
            const phone=formdata.phone;
            const sex=formdata.sex;
            const password=formdata.password;
            const aadhar=formdata.aadhar;
            const email=formdata.email;
            const village=formdata.village;
            const post=formdata.post;
            const ps=formdata.ps;
            const block=formdata.block;
            const pnumber=formdata.pnumber;

            const body={zipcode,name, location,dob,phone,sex,password,aadhar,email};

            const response = await fetch("https://taxibackendf.herokuapp.com/api/service/signup",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            const datainjson = await response.json();
            const sid =  datainjson.memer.service_id; 
            const body_address ={village,post, ps,block,pnumber};
           // console.log(SERVICE_ID);
            const response_address = await fetch(`https://taxibackendf.herokuapp.com/api/service/${sid}`,{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body_address)
         })
        ///    const datainjson = await response_address.json();

            window.location =`/driver/login`;

        }catch(err){
            console.log('Error')
        }

    }
    const renderForm = () =>{
    switch(step){
        case 1: 
        return<div className="admin_form_div">
		<h1 className="form_header">
			Hey Admin! </h1>
	
  <center>
	<form id="admin_form"  name="admin_form" >
    <label for="Email" className="label">Enter the Email</label><br/>
				<input type="email" name="Email" className="Email" value={formdata.email} onChange={e =>{setFormData({ ...formdata, email: e.target.value })}} placeholder="email@id.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter valid email" required />  <br/><br/>


			<label for="password" className="label">Enter the password! </label><br/>
				<input type="password" name="password" className="input" value={formdata.password}
                onChange={e =>{
                setFormData({ ...formdata, password: e.target.value })}}
                placeholder="Password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                 required />  <br/><br/>


                <label for="Phone" className="label">Enter Phone</label><br/>
                <input type="tel" name="Phone" className="input" value={formdata.phone} 
                onChange={e =>{
                setFormData({ ...formdata, phone: e.target.value })}}
                    placeholder="9876543210" 
                pattern="[0-9]{10}"
                title="Must be 10 digit number"
                required />  <br/><br/>


			<label for="Name" className="label">Enter Name </label><br/>
				<input type="text" name="Name" className="input" value={formdata.name} 
                onChange={e =>{
                setFormData({ ...formdata, name: e.target.value })}}
                    placeholder="Name" 
                 required />  <br/><br/>

            
			<label for="aadhar" className="label">Enter aadhar </label><br/>
				<input type="text" name="aadhar" className="input" value={formdata.aadhar} 
                onChange={e =>{
                setFormData({ ...formdata, aadhar: e.target.value })}}
                placeholder="AAdhar" 
                maxlength="12"
                minlength="12"
                title="Enter a Aadhar" required />  <br/><br/>

                
            <label for="DOB" className="label">Enter D.O.B </label><br/>
				<input type="date" name="DOB" className="input" value={formdata.dob} 
                onChange={e =>{
                setFormData({ ...formdata, dob: e.target.value })}}
                 required />  <br/><br/>



			<label for="Sex" className="label">Enter Sex </label><br/>
                <select name="Sex" id="Sex" value={formdata.sex} 
                                onChange={e =>{
                                    setFormData({ ...formdata, sex: e.target.value })}}
                    >
                    <optgroup label="Gender" >
                    <option  ></option>
                    <option  >Male</option>
                            <option >Female</option>
                    </optgroup>
    
                </select>

                <br/><br/>

                
                 <label for="Place" className="label">Enter Place </label><br/>
                 <input type="text" name="Place" className="input" value={formdata.location} 
                onChange={e =>{
                setFormData({ ...formdata, location: e.target.value })}}
                     placeholder="Place" 
                 
                  required />  <br/><br/>


            <label for="Zipcode" className="label">Enter Zipcode </label><br/>
				<input type="text" name="Zipcode" className="input" value={formdata.zipcode} 
                onChange={e =>{
                setFormData({ ...formdata, zipcode: e.target.value })}}
                    placeholder="000000" 
                pattern="[0-9]{6}"
                title="Enter a valid Zipcode"
                required />  <br/><br/>

                <button onClick = {() => setstep(step+1)}>Submit</button>

        </form> 
        </center>






    </div>
        case 2: return <div className="admin_form_div">
		<h1 className="form_header">Hey ! </h1>
	
        <center>
	        <form  action="/initial" id="admin_form"  name="admin_form" onSubmit={onSubmitform}>
                <label for="village" className="label">Enter the village</label><br/>
				<input type="text" name="village" className="village" value={formdata.village} onChange={e =>{console.log(formdata.village)
                    setFormData({ ...formdata, village: e.target.value })}}  required />
                <br/>
                <br/>
                <label for="post" className="label">Enter the post</label><br/>
				<input type="string" name="post" className="Emails" value={formdata.post} onChange={e =>{console.log(formdata.post)
                    setFormData({ ...formdata, post: e.target.value })}}  required />
                <br/>
                <br/>
                <label for="ps" className="label">Enter the ps</label><br/>
				<input type="string" name="ps" className="Emails" value={formdata.ps} onChange={e =>{console.log(formdata.ps)
                    setFormData({ ...formdata, ps: e.target.value })}}  required />
                <br/>
                <br/>
                <label for="block" className="label">Enter the block</label><br/>
				<input type="string" name="block" className="Emails" value={formdata.block} onChange={e =>{console.log(formdata.block)
                    setFormData({ ...formdata, block: e.target.value })}}  required />
                <br/>
                <br/>                
                <label for="pnumber" className="label">Enter the pnumber</label><br/>
				<input type="string" name="pnumber" className="Emails" value={formdata.pnumber} onChange={e =>{console.log(formdata.pnumber)
                    setFormData({ ...formdata, pnumber: e.target.value })}}  required />
                <br/>
                <br/>
                <button type="submit">Submit</button>
        </form> 
        </center>




    </div>
        default: return <div></div>


    }

}
return (

    renderForm()
)
  
};
 
export default Rider_Signup;