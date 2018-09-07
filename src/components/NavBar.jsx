import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {};

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar-icon-top fixed-top">
          <Link className="navbar-brand nav-link" to="/">
            CuongEATS
          </Link>

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
          <div className="cart">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa fa-shopping-cart">
                    <span className="badge badge-danger">
                      {this.props.totalItems}
                    </span>
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default NavBar;
