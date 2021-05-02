import React from "react";
import { Link } from "react-router-dom";
import "./HeadLinks.css";
import "../bootstrap/css/bootstrap.css";
import "../css/font-awesome.min.css";
import "../css/animate.min.css";
import "../css/style.css";

const HeadLinks = (props) => {
  return (
    <nav
      id="navbar-section"
      className="headlink navbar-default navbar-static-top navbar-sticky"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-responsive-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          id="navbar-spy"
          className="collapse navbar-collapse navbar-responsive-collapse"
        >
          <ul className="nav navbar-nav pull-right">
            <li>
              <Link to={`/driverini`}>CUSTOMER</Link>
            </li>
            <li>
              <Link to={`/servini`}>SERVICEMAN</Link>
            </li>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
export default HeadLinks;
