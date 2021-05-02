import React from "react";

import "../bootstrap/css/bootstrap.css";
import "../css/font-awesome.min.css";
import "../css/animate.min.css";
import "../css/style.css";

function HeaderImage() {
  return (
    <section id="carousel-section" class="section-global-wrapper">
      <div class="container-fluid-kamn">
        <div class="row">
          <div id="carousel-1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators visible-lg">
              <li
                data-target="#carousel-1"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li data-target="#carousel-1" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img
                  src="../images/slide2.jpg"
                  height="400"
                  alt="Image of first carousel"
                />
                <div class="carousel-caption">
                  <h3 class="carousel-title hidden-xs">
                    Office BOOTSTRAP TEMPLATE
                  </h3>
                  <p class="carousel-body">RESPONSIVE \ MULTI PAGE</p>
                </div>
              </div>

              <div class="item">
                <img
                  src={require("../images/slide4.jpg")}
                  height="400"
                  alt="Image of second carousel"
                />
                <div class="carousel-caption">
                  <h3 class="carousel-title hidden-xs">EASY TO CUSTOMIZE</h3>
                  <p class="carousel-body">BEAUTIFUL \ CLEAN \ MINIMAL</p>
                </div>
              </div>

              <div class="item">
                <img
                  src={require("../images/slide2.jpg")}
                  height="400"
                  alt="Image of third carousel"
                />
                <div class="carousel-caption">
                  <h3 class="carousel-title hidden-xs">
                    MULTI-PURPOSE TEMPLATE
                  </h3>
                  <p class="carousel-body">PORTFOLIO \ CORPORATE \ CREATIVE</p>
                </div>
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#carousel-1"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              class="right carousel-control"
              href="#carousel-1"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderImage;
