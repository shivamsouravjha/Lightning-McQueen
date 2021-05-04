import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import NewNavBar from "./NewNavBar";
const MainNavigation = (props) => {
  return (
    <>
      {/* <Header/> */}
      <NewNavBar />
    </>
  );
};

export default MainNavigation;
