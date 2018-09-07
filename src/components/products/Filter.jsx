import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Filter.css";
import FilterItem from "./FilterItem";

class Filter extends Component {
  componentDidMount() {
    this.selectedFilters = new Set();
    this.props.onUpdateFilters(this.props.filters);
  }
  render() {
    const filterItems = this.props.categories.map(c => {
      return (
        <FilterItem
          key={c.id}
          category={c}
          onCheckboxChange={this.handleCheckboxChange}
        />
      );
    });
    return (
      <div className="Filter">
        <div className="header">Filters</div>
        <div className="filter-form">{filterItems}</div>
      </div>
    );
  }

  handleCheckboxChange = (value, checked) => {
    const intValue = parseInt(value, 10);
    if (checked && !this.selectedFilters.has(intValue)) {
      this.selectedFilters.add(intValue);
    }

    if (!checked && this.selectedFilters.has(intValue)) {
      this.selectedFilters.delete(intValue);
    }

    this.props.onUpdateFilters(Array.from(this.selectedFilters));
  };
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.number)
};

export default Filter;
