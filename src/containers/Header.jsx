import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSideDrawer } from "../store/actions/headerActions";
import PropTypes from "prop-types";
import "./Header.css";
import NavBar from "../components/navigation/NavBar";
import SideDrawer from "../components/navigation/SideDrawer";

class Header extends Component {
  handleToggleButtonClick = () => {
    if (!this.props.header.isSideDrawerOpen) this.props.toggleSideDrawer(true);
  };

  handleClickOutsideSideDrawer = () => {
    this.props.toggleSideDrawer(false);
  };

  handleClickSideDrawerLink = () => {
    this.props.toggleSideDrawer(false);
  };

  render() {
    const { isSideDrawerOpen } = this.props.header;
    const { totalItems } = this.props;

    return (
      <div>
        <header className="header">
          <NavBar
            onToggleButtonClick={this.handleToggleButtonClick}
            totalItems={totalItems}
          />
        </header>
        <SideDrawer
          totalItems={totalItems}
          onClickOutsideSideDrawer={this.handleClickOutsideSideDrawer}
          onClickSideDrawerLink={this.handleClickSideDrawerLink}
          show={isSideDrawerOpen}
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  header: state.header
});

export default connect(
  mapStateToProps,
  { toggleSideDrawer }
)(Header);
