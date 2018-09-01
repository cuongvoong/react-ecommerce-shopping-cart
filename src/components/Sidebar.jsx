import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../store/actions/productActions";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {
  state = {};

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const sideBarItems = this.props.categories.map(c => {
      return <SidebarItem key={c.id} category={c} />;
    });

    return (
      <nav id="sidebar">
        <ul className="list-unstyled components">{sideBarItems}</ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.products.categories
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Sidebar);
