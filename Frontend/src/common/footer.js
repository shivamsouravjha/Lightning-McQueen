import React from "react";
import "./footer.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <article className="footerContainer">
        <div className="con" style={{ width: "25%" }}>
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
            <li className="footerHeads" style={{ marginTop: "2.5rem" }}>
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
            <li className="footerHeads" style={{ marginTop: "1.5rem" }}>
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
        <div
          className="con"
          style={{ width: "25%", alignItems: "flex-start", paddingTop: "1rem" }}
        >
          <ul>
            <li className="footerHeads" style={{ marginTop: "2.5rem" }}>
              Reach Us
            </li>
            <li>
              &#8827; Mobile No: <a> 9769830037, 9471924659</a>
            </li>
            <li>
              &#8827; Email : <a> Info@Sewakar.Com</a>
            </li>
            <li
              style={{ width: "90%", paddingLeft: "2.5rem", marginTop: "2rem" }}
            >
              We are Team of designers and developers that create high quality
              Magneto , Prestashop , Opencat
            </li>
          </ul>
        </div>
      </article>
      <div className="copyrightSection">
        <h5> Copyright © 2021 Sewakar. All rights reserved. </h5>
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
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
  @media only screen and (max-width: 1300px) {
    .footerContainer {
      height: 30rem;
    }
  }
  @media only screen and (max-width: 950px) {
    .footerContainer {
      display: none;
    }
  }
`;

export default Footer;
