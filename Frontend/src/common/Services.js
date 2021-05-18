import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ser1 from "../images/ser1.png";
import ser2 from "../images/ser2.png";
import ser3 from "../images/ser3.png";
import ser4 from "../images/ser4.png";
import ser5 from "../images/ser5.png";
import ser6 from "../images/ser6.png";
import "./services.css";
const Services = () => {
  return (
    <>
      <div className="services">
        <span className="service_span">SERVICES WE PROVIDE</span>
        <div className="Order">
          <div className="orderCon">
            <div className="mobOrder"></div>
            <div className="ser_des">
              <img className="ser_icon" src={ser1} />
              <br />
              <p>AC repair</p>
            </div>
            <div className="ser_des">
              <img className="ser_icon" src={ser2} />
              <br />
              <p>Appliances repair</p>
            </div>
            <div className="ser_des">
              <img className="ser_icon" src={ser3} />
              <br />
              <p>Electrical repair</p>
            </div>
          </div>
          <div className="orderCon">
            <div className="ser_des">
              {" "}
              <img className="ser_icon" src={ser4} />
              <br />
              <p>HomeCare </p>
            </div>
            <div className="ser_des">
              <img className="ser_icon" src={ser5} />
              <br />
              <p>Plumbing Services</p>
            </div>
            <div className="ser_des">
              <img className="ser_icon" src={ser6} />
              <br />
              <p>Construction</p>
            </div>
          </div>
        </div>
      </div>
      <div className="loginBtnBox">
        <Link to="/driver/login" className="loginBtnServices">
          Book Now
        </Link>
      </div>
    </>
  );
};

export default Services;
