import React from "react";
import { connect } from "react-redux";
import { getProductsByCategoryId } from "../store/actions/productActions";

class SidebarItem extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <React.Fragment>
        <li>
          <a href={null} onClick={() => this.handleCategoryClick(category.id)}>
            {category.name}
          </a>
        </li>
      </React.Fragment>
    );
  }

  handleCategoryClick = id => {
    console.log("handled click");
    console.log(id);
    this.props.getProductsByCategoryId(id);
  };
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(
  mapStateToProps,
  { getProductsByCategoryId }
)(SidebarItem);
