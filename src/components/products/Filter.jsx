import React, { Component } from "react";
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

    this.props.onUpdateFilters(Array.from(this.selectedFilters));
  };
}

export default Filter;
