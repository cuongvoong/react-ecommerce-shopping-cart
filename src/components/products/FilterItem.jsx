import React, { Component } from "react";

class FilterItem extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={category.id}
          id={category.id}
          onChange={this.handleChange}
        />
        <label className="form-check-label" htmlFor={category.id}>
          {category.name}
        </label>
      </div>
    );
  }
  handleChange = event => {
    const { checked, value } = event.target;
    this.props.handleCheckboxChange(value, checked);
  };
}

export default FilterItem;
