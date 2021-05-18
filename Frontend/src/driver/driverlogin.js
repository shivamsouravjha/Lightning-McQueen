import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Driver_login = () => {
  const [password, setPassword] = useState("");
  const [email, set_email] = useState("");

  const onSubmitform = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };

      const response = await fetch(
        "https://taxibackendf.herokuapp.com/api/customer/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const datainjson = await response.json();
      if (response.status == 201){
        const did = datainjson.driver._id;

        window.location = `/driver/${did}`;
      ///
    }else{
      window.alert(datainjson.message);
    }
      
      
    } catch (err) {
      console.log("Error");
    }

    //added later
    setPassword("");
    set_email("");
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h4>Login Form</h4>
        </div>
        <form
          action="/initial"
          id="admin_form"
          name="admin_form"
          onSubmit={onSubmitform}
        >
          <div className="inputBox">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              name="name"
              className="input"
              value={email}
              onChange={(e) => set_email(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    margin: 0;
    padding: 0;
    width: 90%;
    height: 35rem;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    align-items: center;
    justify-content: flex-start;
  }
  .header {
    width: 100%;
    height: 4rem;
    background-color: black;
    diplay: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    color: white;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 4rem;
  }

  .input {
    margin-bottom: 3rem;
    width: 90%;
    background-color: #d6d6d6;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  button {
    font-size: 20px;
    padding: 6px 1rem;
    border: none;
    outline: none;
    color: white;
    background-color: #22a6a8;
  }

  button:hover {
    background-color: #9fd5d6;
    color: #22a6a8;
  }

  @media only screen and (min-width: 560px) {
    .container {
      width: 40rem;
    }
  }
`;

export default Driver_login;
