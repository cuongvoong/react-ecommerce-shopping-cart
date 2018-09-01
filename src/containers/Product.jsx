import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../components/products/ProductItem";
import {
  fetchProducts,
  fetchCategories
} from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";
import { updateFilters } from "../store/actions/filterActions";
import "./Product.css";
import Filter from "../components/products/Filter";

class Product extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProducts(this.props.filters);
    this.props.fetchCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters !== this.props.filters) {
      this.props.fetchProducts(this.props.filters);
    }
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <ProductItem
          key={item.id}
          item={item}
          onAddToCart={this.handleAddToCart}
        />
      );
    });

    return (
      <div className="Product">
        {/* <Sidebar /> */}
        <Filter
          categories={this.props.categories}
          onUpdateFilters={this.handleUpdateFilters}
        />
        <div className="ProductItems card-group">{items}</div>
      </div>
    );
  }

  handleAddToCart = item => {
    this.props.addToCart(item);
  };

  fetchCategories = () => {
    this.props.fetchCategories();
  };

  handleUpdateFilters = filters => {
    this.props.updateFilters(filters);
  };
}

const mapStateToProps = state => ({
  items: state.products.items,
  filters: state.filters.items,
  categories: state.products.categories
});

export default connect(
  mapStateToProps,
  { fetchProducts, fetchCategories, addToCart, updateFilters }
)(Product);
