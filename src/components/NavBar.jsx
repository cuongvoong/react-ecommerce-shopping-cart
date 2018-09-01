import React, { Component } from "react";
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
        <nav className="navbar navbar-icon-top fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            CuongEATS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <i className="fa fa-home" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success my-2 my-sm-0"
                  to="/products"
                >
                  Order
                </Link>
              </li>
            </ul>
            <form>
              <ul className="navbar-nav mr-auto">
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
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
