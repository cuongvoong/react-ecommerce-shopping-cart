import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.css";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = props => {
  return (
    <nav className="navbar-icon-top fixed-top">
      <HamburgerMenu onToggleButtonClick={props.onToggleButtonClick} />
      <Link className="navbar-brand nav-link" to="/">
        CuongEATS
      </Link>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa fa-home" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn-outline-success" to="/products">
              <div>Order</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fa fa-shopping-cart">
                <span className="badge badge-danger">{props.totalItems}</span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default NavBar;
