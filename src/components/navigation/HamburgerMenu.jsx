import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = props => {
  return (
    <div className="HamburgerMenu" onClick={props.onToggleButtonClick}>
      <div className="HamburgerMenu-line" />
      <div className="HamburgerMenu-line" />
      <div className="HamburgerMenu-line" />
    </div>
  );
};

export default HamburgerMenu;
