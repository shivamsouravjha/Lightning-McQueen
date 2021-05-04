import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Services from "./Services.js";
import image1 from "../images/home1-slide11.jpeg";
import "./initial.css";

const main_page = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <div className="bg-img">
        <div className="bottom-right">
          <span className="span_heading1">SEWAKAR</span>
          <span className="span_heading2">THIS PLATFORM</span>
          <span className="span_heading3">
            WILL ACT AS A BRIDGE BETWEEN THE JOB SEEKER AND THE JOB PROVIDER
          </span>
          <br />
          <a href="tel:+919769830037" target="">
            <button className="enquiry">
              <span class="fa fa-phone fa-lg"></span>
              <b> Enquiry now</b>
            </button>
          </a>
        </div>
      </div>

      <div>
        <Services />
      </div>
      <div
        className="imageBox"
        style={{ backgroundImage: "url(./banner1.jpg)" }}
      ></div>
    </div>
  );
};

export default main_page;
