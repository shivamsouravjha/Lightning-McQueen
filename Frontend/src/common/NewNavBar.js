import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewNavBar = () => {
  useEffect(() => {
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".nav-menu");
    menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
    return () =>
      document.removeEventListener("click", () => {
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
      });
  });
  return (
    <Wrapper>
      <div className="nav-container">
        <nav className="navbar">
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-menu">
            <li>
              <Link className="nav-links" to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="nav-links nav-links-btn" to="/driver/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-links nav-links-btn" to="/driver/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  :root {
    --lightgreen: #a2bad6;
    --darkyellow: rgb(224, 224, 10);
  }
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 100;
  .nav-container {
    width: 100%;
    background-color: var(--lightgreen);
    z-index: 100;
  }
  .navbar {
    display: grid;
    align-items: center;
    height: 80px;
    width: 100%;
    max-width: 1720px;
    margin: 0 auto;
    z-index: 100;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(7, auto);
    text-align: center;
    width: 70%;
    justify-self: end;
    z-index: 100;
    margin-right: 8rem;
  }
  .nav-links {
    color: white;
    font-size: 20px;
    text-decoration: none;
    z-index: 100;
  }
  .nav-links:hover {
    color: black;
    transition: all 0.2s ease-out;
  }

  .menu-toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: white;
    z-index: 100;
  }
  @media only screen and (max-width: 1200px) {
    .nav-container {
      position: relative;
    }
    .nav-menu {
      display: grid;
      grid-template-columns: auto;
      margin: 0;
      width: 100%;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: #2d917f;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-links {
      text-align: center;
      line-height: 60px;
      width: 100%;
      display: table;
    }
    .navbar {
      width: 100%;
    }
    #mobile-menu {
      position: absolute;
      top: 25%;
      right: 5%;
    }

    .menu-toggle .bar {
      display: block;
      cursor: pointer;
    }
    .menu-toggle:hover {
      cursor: pointer;
    }
    #mobile-menu.is-active .bar:nth-child(2) {
      opacity: 0;
    }
    #mobile-menu.is-active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    #mobile-menu.is-active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
export default NewNavBar;
