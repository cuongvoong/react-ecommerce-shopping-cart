import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

const Header = props => {
  return (
    <header className="header">
      <NavBar totalItems={props.totalItems} />
    </header>
  );
};

export default Header;
