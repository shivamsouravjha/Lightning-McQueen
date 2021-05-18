import React from "react";
import "./footer.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <article className="footerContainer">
        <div className="con exCon">
          <ul style={{ alignItems: "flex-start" }}>
            <li className="specialprop">
              Working hours : Mon - Fri / 8:00 - 18:00
            </li>
            <li className="specialprop">
              Free Support : <a href="tel:+910123456789">+91 0123456789</a>
            </li>
            <li className="specialprop">
              Order Support :<a href="mailto:someone@example.com">Send email</a>
            </li>
            <li>Return Policy</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="con">
          <ul>
            <li
              className="footerHeads"
              style={{ marginTop: "2.5rem" }}
              id="footerHd"
            >
              Quick Contact
            </li>
            <li>
              <a>&#8827; Returns Policy</a>
            </li>
            <li>
              <a>&#8827; About Us</a>
            </li>
            <li>
              <a>&#8827; Our Services</a>
            </li>
            <li>
              <a>&#8827; Contact Us</a>
            </li>
            <li>
              <a>&#8827; Blog</a>
            </li>
          </ul>
        </div>
        <div className="con">
          <ul>
            <li
              className="footerHeads"
              style={{ marginTop: "1.5rem" }}
              id="footerHd"
            >
              Logins
            </li>
            <li>
              <Link className="links" to="/driver/login">
                {" "}
                &#8827; Login For Public
              </Link>
            </li>
            <li>
              <Link className="links" to="/driver/signup">
                {" "}
                &#8827; Register For Public
              </Link>
            </li>
            <li>
              <Link className="links" to="/serviceman/login">
                {" "}
                &#8827; Login For Worker
              </Link>
            </li>
            <li>
              <Link className="links" to="/serviceman/signup">
                {" "}
                &#8827; Register For Worker
              </Link>
            </li>
          </ul>
        </div>
        <div className="con aCon">
          <ul>
            <li
              className="footerHeads"
              style={{ marginTop: "2.5rem" }}
              id="footerHd"
            >
              Reach Us
            </li>
            <li>
              &#8827; Mobile No: <a> 9769830037, 9471924659</a>
            </li>
            <li>
              &#8827; Email : <a> Info@Sewakar.Com</a>
            </li>
            <li className="para">
              We are Team of designers and developers that create high quality
              Magneto , Prestashop , Opencat
            </li>
          </ul>
        </div>
      </article>
      <div className="copyrightSection">
        <img src="./sewakar_logo2.png" width="40px" height="40px"></img>
        <h5>
          &nbsp; &nbsp; &nbsp; Copyright © 2021 <strong> Sewakar </strong> . All
          rights reserved.{" "}
        </h5>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .footerContainer {
    width: 100%;
    height: 30rem;
    background-color: #333436;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: space-evenly;
  }
  .con {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    }
  .exCon {
    width: 25%;
  }
  .aCon {
    width: 25%;
    align-items: flex-start;
    padding-top: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  li {
    margin-top: 1rem;
    color: #828994;
    cursor: pointer;
  }
  li > a {
    color: #828994;
  }
  li > a:hover {
    color: blue;
    font-size: 17px;
    cursor: pointer;
  }
  .para {
    width: 90%;
    padding-left: 2.5rem;
    margin-top: 2rem;
  }
  #footerHd{
    margin-left:1rem;
  }
  .footerHeads {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2rem;
    color: white;
  }
  .copyrightSection {
    color: white;
    background-color: #454545;
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: center;
  }
  .specialprop {
    color: white;
    font-size: 17px;
  }
  
  @media only screen and (max-width: 1350px) {
    .footerContainer {
      flex-direction: column;
      height: 100rem;
    }
    .con {
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      border-bottom:2px solid #6e6e6e;
  
    }
    ul {
      justify-content: centre;
      align-items: flex-start;
    }
    .aCon {
      text-align: start;
      justify-content: flex-start;
    }
    #footerHd{
      margin-left:1rem;
    }
    .para {
      width: 80%;
      margin-left: -1rem;
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 1020px) {
    .con {
      width: 100%;
    }
     @media only screen and (max-width:450px) {
    .con {
      width: 100%;
    }
    ul{
      text-align-center;
    }
    
  }
`;

export default Footer;
