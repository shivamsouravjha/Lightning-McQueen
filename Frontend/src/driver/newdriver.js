import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Driver_Signup = () => {
  const [password, setPassword] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [city, set_city] = useState("");
  const [sanswer, set_sanswer] = useState("");
  const [name, set_name] = useState("");

  const onSubmitform = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
        phone,
        city,
        sanswer,
        name
      };

      const response = await fetch(
        "https://taxibackendf.herokuapp.com/api/customer/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const datainjson = await response.json();

      window.location = `/driver/login`;
    } catch (err) {
      console.log("Error");
    }

    // added later
    setPassword("");
    set_phone("");
    set_city("");
    set_email("");
    set_sanswer("");
    set_name("");
  };
  return (
    <Wrapper>
      <article className="container">
        <div className="header">
          <h4>Registration Form</h4>
        </div>

        <form
          action="/initial"
          id="admin_form"
          name="admin_form"
          onSubmit={onSubmitform}
        >
          <div className="inputContainer">
            <input
              placeholder="Email"
              type="text"
              name="name"
              className="input"
              value={email}
              onChange={(e) => set_email(e.target.value)}
              title="Please enter you email"
 
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
 
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Phone"
              type="text"
              name="name"
              className="input"
              value={phone}
              onChange={(e) => set_phone(e.target.value)}
              title="enter your valid 10 digit mobile number"
              required
 
            />
            <input
              placeholder="NAME"
              type="text"
              name="password(minlength 8)"
              className="input"
              value={name}
              onChange={(e) => set_name(e.target.value)}
              title="Please enter your name"
              required
 
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="City"
              type="text"
              name="name"
              className="input"
              value={city}
              onChange={(e) => set_city(e.target.value)}
              title="Tell your current city for us to assist you"
              required
 
            />
            <input
              placeholder="Security Answer"
              type="text"
              name="password"
              className="input"
              value={sanswer}
              onChange={(e) => set_sanswer(e.target.value)}
              title="security answer to recover account"
              required
 
            />
          </div>

          <button type="submit">Confirm</button>
        </form>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.container{
    width:100%:
    height:38rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin:2rem auto;;
    border:2px solid grey;
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

.header{
 background-color:black;
 width:100%;
 height:6rem;
 display:flex;
 margin-bottom:5rem;
 justify-content:center;
 align-items:center
}

.inputContainer{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:1rem;
}

input{
    width:100%;
    margin-bottom:1rem;
    padding-left:1rem;
    border:1px solid grey;
    height:4rem;
    font-size:16px;
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
   h2{
       margin-top:-6rem;
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
      height:52rem;
   }
   .inputContainer{
     flex-direction:row;
     justify-content:space-evenly;
     margin-bottom:4rem;
   }
   input{
    width:30rem;
   }
  
  }
`;

export default Driver_Signup;
