import React from "react";
import "./footer.css";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <article className="footerContainer">
        <div className="con" style={{ width: "25%" }}>
          <ul>
            <li>Working hours : Mon-Fri/8:00-18:00</li>
            <li>
              Free Support : <a href="tel:+910123456789">+91 0123456789</a>
            </li>
            <li>
              Order Support :<a href="mailto:someone@example.com">Send email</a>
            </li>
            <li>Return Policy</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="con">
          <ul>
            <li>Quick Contact</li>
            <li>
              <a> Returns Policy</a>
            </li>
            <li>
              <a> About Us</a>
            </li>
            <li>
              <a> Our Services</a>
            </li>
            <li>
              <a> Contact Us</a>
            </li>
            <li>
              <a> Blog</a>
            </li>
          </ul>
        </div>
        <div className="con">
          <ul>
            <li>Logins</li>
            <li>
              <a> Login For Public</a>
            </li>
            <li>
              <a> Register For Worker</a>
            </li>
            <li>
              <a> Login For Worker</a>
            </li>
            <li>
              <a> Register For Public</a>
            </li>
          </ul>
        </div>
        <div
          className="con"
          style={{ width: "25%", alignItems: "flex-start", paddingTop: "1rem" }}
        >
          <ul>
            <li>My Account</li>
            <li>
              Mobile No: <a> 9769830037, 9471924659</a>
            </li>
            <li>
              Email : <a> Info@Sewakar.Com</a>
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
    height: 25rem;
    background-color: black;
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
  }

  .copyrightSection {
    color: white;
    background-color: black;
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: center;
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
