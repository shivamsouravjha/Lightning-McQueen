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
  const clickHandler = () => {
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".nav-menu");
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  };
  return (
    <Wrapper>
      <div className="nav-container">
        <nav className="navbar">
          <img src="./sewakar_logo2.png" className="navImg"></img>
          <div className="navBox">
            <ul className="nav-menu">
              <li>
                <Link className="nav-links" to="/" onClick={clickHandler} exact>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/" onClick={clickHandler}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/" onClick={clickHandler}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/" onClick={clickHandler}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/" onClick={clickHandler}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-links nav-links-btn"
                  to="/driver/login"
                  onClick={clickHandler}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="nav-links nav-links-btn"
                  to="/driver/signup"
                  onClick={clickHandler}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 80px;
    width: 100%;
    max-width: 1720px;
    margin: 0 auto;
    z-index: 100;
    padding-left: 12rem;
    padding-right: 8rem;
    position: relative;
  }
  .navImg {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0%;
    left: 8%;
    z-index: 200;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 10px;
  }
  .nav-menu > li {
    margin-left: 4rem;
  }
  .navBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;
  }
  .nav-links {
    color: white;
    font-size: 20px;
    text-decoration: none;
    z-index: 100;
    width: 100%;
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
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-links {
      text-align: center;
      line-height: 40px;
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
  @media only screen and (max-width: 790px) {
    .nav-links {
      padding-right: 2rem;
      text-align: center;
      line-height: 60px;
      width: 100%;
      display: table;
      background: #298d78;
    }
    .navbar {
      padding-left: 3rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .navbar {
      padding-left: 1rem;
    }
  }
`;
export default NewNavBar;
