import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeadLinks from "./HeadLinks";

import "./Header.css";
const Header = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      <nav className="nav-header">
        <div>ARE YOU A : </div>
        <HeadLinks />
      </nav>
    </React.Fragment>
  );
};

export default Header;
