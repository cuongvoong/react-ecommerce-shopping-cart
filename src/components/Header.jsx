import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import NavBar from "./NavBar";

const Header = props => {
  return (
    <header className="header">
      <NavBar totalItems={props.totalItems} />
    </header>
  );
};

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default Header;
