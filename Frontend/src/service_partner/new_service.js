import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Rider_Signup = () => {
  const [step, setstep] = useState(1);
  const [formdata, setFormData] = useState({
    zipcode: "",
    email: "",
    name: "",
    location: "",
    dob: "",
    phone: "",
    sex: "",
    password: "",
    aadhar: "",
    village: "",
    post: "",
    ps: "",
    block: "",
    pnumber: "",
  }); // use to hold input from user
  const onSubmitform = async (e) => {
    e.preventDefault();
    try {
      //  console.log(phone);
      // console.log(password);
      // console.log(aadhar);
      //  console.log(location);
      ///  console.log(dob);
      // console.log(sex);
      /// console.log(zipcode);
      const zipcode = formdata.zipcode;
      const name = formdata.name;
      const location = formdata.location;
      const dob = formdata.dob;
      const phone = formdata.phone;
      const sex = formdata.sex;
      const password = formdata.password;
      const aadhar = formdata.aadhar;
      const email = formdata.email;
      const village = formdata.village;
      const post = formdata.post;
      const ps = formdata.ps;
      const block = formdata.block;
      const pnumber = formdata.pnumber;

      const body = {
        zipcode,
        name,
        location,
        dob,
        phone,
        sex,
        password,
        aadhar,
        email,
      };

      const response = await fetch(
        "https://taxibackendf.herokuapp.com/api/service/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const datainjson = await response.json();
      const sid = datainjson.memer.service_id;
      const body_address = { village, post, ps, block, pnumber };
      // console.log(SERVICE_ID);
      const response_address = await fetch(
        `https://taxibackendf.herokuapp.com/api/service/${sid}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body_address),
        }
      );
      ///    const datainjson = await response_address.json();
 
      if (response.status == 201){
        const did = datainjson.rider._id;

        window.location = `/driver/login`;
      ///
    }else{
      window.alert(datainjson.message);
    }
      
    } catch (err) {
      console.log("Error");
    }
    //added later
    setFormData({
      zipcode: "",
      email: "",
      name: "",
      location: "",
      dob: "",
      phone: "",
      sex: "",
      password: "",
      aadhar: "",
      village: "",
      post: "",
      ps: "",
      block: "",
      pnumber: "",
    });
  };
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Wrapper>
            <article className="container">
              <div className="header">
                <h4>Registeration Form</h4>
              </div>
              <form id="admin_form" name="admin_form">
                <div className="inputContainer">
                  <input
                    type="email"
                    name="Email"
                    className="Email"
                    value={formdata.email}
                    onChange={(e) => {
                      setFormData({ ...formdata, email: e.target.value });
                    }}
                    placeholder="email@id.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter valid email"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    className="input"
                    value={formdata.password}
                    onChange={(e) => {
                      setFormData({ ...formdata, password: e.target.value });
                    }}
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="tel"
                    name="Phone"
                    className="input"
                    value={formdata.phone}
                    onChange={(e) => {
                      setFormData({ ...formdata, phone: e.target.value });
                    }}
                    placeholder="9876543210"
                    pattern="[0-9]{10}"
                    title="Must be 10 digit number"
                    required
                  />
                  <input
                    type="text"
                    name="Name"
                    className="input"
                    value={formdata.name}
                    onChange={(e) => {
                      setFormData({ ...formdata, name: e.target.value });
                    }}
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="inputContainer">
                  <input
                    type="text"
                    name="Place"
                    className="input"
                    value={formdata.location}
                    onChange={(e) => {
                      setFormData({ ...formdata, location: e.target.value });
                    }}
                    placeholder="Place"
                    required
                  />
                  <input
                    type="text"
                    name="Zipcode"
                    className="input"
                    value={formdata.zipcode}
                    onChange={(e) => {
                      setFormData({ ...formdata, zipcode: e.target.value });
                    }}
                    placeholder="ZipCode"
                    pattern="[0-9]{6}"
                    title="Enter a valid Zipcode"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="text"
                    name="aadhar"
                    className="input"
                    value={formdata.aadhar}
                    onChange={(e) => {
                      setFormData({ ...formdata, aadhar: e.target.value });
                    }}
                    placeholder="Aadhar"
                    maxlength="12"
                    minlength="12"
                    title="Enter a Aadhar"
                    required
                  />
                  <input
                    type="date"
                    name="DOB"
                    className="input"
                    value={formdata.dob}
                    onChange={(e) => {
                      setFormData({ ...formdata, dob: e.target.value });
                    }}
                    required
                    style={{ width: "15rem" }}
                  />
                  <select
                    name="Sex"
                    id="Sex"
                    value={formdata.sex}
                    onChange={(e) => {
                      setFormData({ ...formdata, sex: e.target.value });
                    }}
                  >
                    <optgroup label="Gender">
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </optgroup>
                  </select>
                </div>
                <button onClick={() => setstep(step + 1)}>Submit</button>
              </form>
            </article>
          </Wrapper>
        );

      case 2:
        return (
          <Wrapper>
            <article className="container">
              <div className="header">
                <h4>Registeration form</h4>
              </div>
              <form
                action="/initial"
                id="admin_form"
                name="admin_form"
                onSubmit={onSubmitform}
              >
                <div className="inputContainer">
                  <input
                    type="text"
                    name="village"
                    className="village"
                    value={formdata.village}
                    onChange={(e) => {
                      console.log(formdata.village);
                      setFormData({ ...formdata, village: e.target.value });
                    }}
                    placeholder="Enter the village"
                    required
                  />
                  <input
                    type="string"
                    name="post"
                    className="Emails"
                    value={formdata.post}
                    onChange={(e) => {
                      console.log(formdata.post);
                      setFormData({ ...formdata, post: e.target.value });
                    }}
                    placeholder="Enter the post"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="string"
                    name="ps"
                    className="Emails"
                    value={formdata.ps}
                    onChange={(e) => {
                      console.log(formdata.ps);
                      setFormData({ ...formdata, ps: e.target.value });
                    }}
                    placeholder="Enter the PS"
                    required
                  />
                  <input
                    placeholder="Enter the block"
                    type="string"
                    name="block"
                    className="Emails"
                    value={formdata.block}
                    onChange={(e) => {
                      console.log(formdata.block);
                      setFormData({ ...formdata, block: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <input
                    placeholder="Enter the PinCode"
                    type="string"
                    name="pnumber"
                    className="Emails"
                    value={formdata.pnumber}
                    onChange={(e) => {
                      console.log(formdata.pnumber);
                      setFormData({ ...formdata, pnumber: e.target.value });
                    }}
                    required
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </article>
          </Wrapper>
        );
      default:
        return <div></div>;
    }
  };
  return renderForm();
};

const Wrapper = styled.section`
.container{
    width:90%:
    height:60rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin:2rem auto;
    border:1px solid grey;
    border-top:none;
    
}
form{
    width:80%;
    display:flex;
    flex-direction:column;
    margin-top:5rem;
}
h4{
  color:white;
  text-align:center;
}
.inputContainer{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:1rem;
}

.header{
 background-color:black;
 width:100%;
 height:6rem;
 margin-bottom:5rem;
 display:flex;
 justify-content:center;
 align-items:center;
}

input{
    width:100%;
    margin-bottom:1rem;
    padding-left:1rem;
    height:4rem;

}
button{
    font-size: 20px;
    padding: 6px 1rem;
    border: none;
    outline: none;
    color: white;
    background-color: #22a6a8;
    margin:0.8rem auto;
  }
  button:hover {
    background-color: #9fd5d6;
    color: #22a6a8;
  }


  @media only screen and (min-width:500px){
      .container{
          width:40rem;
          height:65rem;
      }
  }
  @media only screen and (min-width:800px){
   .container{
      width: 80%;
      border:2px solid black
      height:53rem;
   }
   .inputContainer{
     flex-direction:row;
     justify-content:space-evenly;
     margin-bottom:4rem;
   }
   input{
    width:30rem;
   }
  
  }`;

export default Rider_Signup;
