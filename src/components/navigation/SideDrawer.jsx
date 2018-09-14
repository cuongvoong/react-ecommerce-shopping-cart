import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside = event => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.props.show
    ) {
      this.props.onClickOutsideSideDrawer();
    }
  };

  handleClickLink = () => {
    this.props.onClickSideDrawerLink();
  };

  render() {
    const { show, totalItems } = this.props;

    const sideDrawerClasses = "SideDrawer" + (show ? " show" : "");
    return (
      <div className={sideDrawerClasses} ref={this.setWrapperRef}>
        <ul>
          <li>
            <Link onClick={this.handleClickLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClickLink} to="/products">
              Order
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClickLink} to="/cart">
              <div className="SideDrawer-cart">
                <span>Cart</span>
                <i className="fa fa-shopping-cart">
                  <span className="badge badge-danger">{totalItems}</span>
                </i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired
};

export default SideDrawer;
