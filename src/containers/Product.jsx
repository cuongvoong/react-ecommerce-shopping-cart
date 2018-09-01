import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../components/products/ProductItem";
import { fetchProducts } from "../store/actions/productActions";
import "./Product.css";
import Filter from "../components/products/Filter";

class Product extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProducts(this.props.filters);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters !== this.props.filters) {
      this.props.fetchProducts(this.props.filters);
    }
  }

  render() {
    const items = this.props.items.map(item => {
      return <ProductItem key={item.id} item={item} />;
    });

    return (
      <div className="Product">
        {/* <Sidebar /> */}
        <Filter />
        <div className="ProductItems card-group">{items}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.products.items,
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Product);
