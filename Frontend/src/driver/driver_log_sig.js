import React, { useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Driver_log_sig = () => {
  return (
    <Wrapper>
      <h2>Login / Sign Up for Customers</h2>
      <div className="container">
        <div className="card">
          <h4>Already have an account?</h4>
          <Link to={`/driver/login`}>
            {" "}
            <button className="Btn">Login</button>
          </Link>
        </div>
        <div className="card">
          <h4>Create new account </h4>
          <Link to={`/driver/signup`}>
            {" "}
            <button className="Btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </Wrapper>
    // <div>

    //   <h1 className="pageheader"> DEFINE YOURSELF</h1>

    //  <center> <ul className="header">
    //     <li> <> <button className="admin_div" >Login</button></Link></li>
    //     <li> <Link to={}> <button className="admin_div" >Signup</button></Link></li>
    //   </ul></center>
    //   <div className="content">

    //   </div>
    // </div>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    margin-top: -8rem;
  }
  h2 {
    text-align: center;
    padding-top: 6rem;
  }
  h4 {
    max-width: 60%;
    font-weight: 500;
  }
  .card {
    width: 60%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ceedd7;
    border: 1px solid grey;
    border-radius: 10px;
  }
  .Btn {
    font-size: 20px;
    padding: 6px 1rem;
    border: none;
    outline: none;
    color: white;
    background-color: #22a6a8;
  }
  .Btn:hover {
    background-color: #9fd5d6;
    color: #22a6a8;
  }
  @media only screen and (min-width: 950px) {
    .container {
      padding: 5rem 0;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 60rem;
    }
    .card {
      width: 35%;
      height: 25rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 2px solid black;
    }
    .Btn {
      margin-top: 2rem;
    }
  }
`;

export default Driver_log_sig;
