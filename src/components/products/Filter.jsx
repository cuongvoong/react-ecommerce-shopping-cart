import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/productActions";
import { updateFilters } from "../../store/actions/filterActions";
import "./Filter.css";
import FilterItem from "./FilterItem";

class Filter extends Component {
  componentDidMount() {
    this.selectedFilters = new Set();
    this.props.fetchCategories();
    this.props.updateFilters(this.props.filters);
  }
  render() {
    const filterItems = this.props.categories.map(c => {
      return (
        <FilterItem
          key={c.id}
          category={c}
          handleCheckboxChange={this.handleCheckboxChange}
        />
      );
    });
    return (
      <div className="Filter">
        <div>Filters</div>
        <div className="form-check">{filterItems}</div>
      </div>
    );
  }

  handleCheckboxChange = (value, checked) => {
    if (checked && !this.selectedFilters.has(value)) {
      this.selectedFilters.add(value);
    }

    if (!checked && this.selectedFilters.has(value)) {
      this.selectedFilters.delete(value);
    }

    // console.log(this.selectedFilters);
    this.props.updateFilters(Array.from(this.selectedFilters));
  };
}

const mapStateToProps = state => ({
  categories: state.products.categories,
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { fetchCategories, updateFilters }
)(Filter);
