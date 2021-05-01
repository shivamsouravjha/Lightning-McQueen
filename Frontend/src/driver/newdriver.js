import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Driver_Signup = () => {
  const [password, setPassword] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [driver_name, set_driver_name] = useState("");
  const [car_number, set_car_number] = useState("");
  const [account, set_account] = useState("");
  const [lat, set_lat] = useState();
  const [lng, set_lng] = useState();

  const onSubmitform = async (e) => {
    e.preventDefault();
    try {
      const location = { lat, lng };
      const body = {
        email,
        password,
        phone,
        driver_name,
        car_number,
        account,
        location,
      };

      const response = await fetch(
        "https://taxibackendf.herokuapp.com/api/driver/signup",
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
    set_account("");
    set_car_number("");
    set_driver_name("");
    set_email("");
    set_lat("");
    set_lng("");
  };
  return (
    <Wrapper>
      <article className="container">
        <div className="header">
          <h4>Registeration Form</h4>
        </div>

        <form
          action="/initial"
          id="admin_form"
          name="admin_form"
          onSubmit={onSubmitform}
        >
          <div className="inputContainer">
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input"
              value={email}
              onChange={(e) => set_email(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              required
            />
            <input
              placeholder="Driver name"
              type="password"
              name="password"
              className="input"
              value={driver_name}
              onChange={(e) => set_driver_name(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Car Number"
              type="text"
              name="name"
              className="input"
              value={car_number}
              onChange={(e) => set_car_number(e.target.value)}
              required
            />
            <input
              placeholder="Account"
              type="password"
              name="password"
              className="input"
              value={account}
              onChange={(e) => set_account(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="lat"
              type="text"
              name="name"
              className="input"
              value={lat}
              onChange={(e) => set_lat(e.target.value)}
              required
            />
            <input
              placeholder="lng"
              type="password"
              name="password"
              className="input"
              value={lng}
              onChange={(e) => set_lng(e.target.value)}
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
 height:4rem;
 margin-bottom:5rem;
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
