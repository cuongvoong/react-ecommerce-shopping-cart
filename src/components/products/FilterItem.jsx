import React from "react";
import PropTypes from "prop-types";

const FilterItem = props => {
  const handleChange = event => {
    const { checked, value } = event.target;
    props.onCheckboxChange(value, checked);
  };

  const { category } = props;

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={category.id}
        id={category.id}
        onChange={handleChange.bind(this)}
      />
      <label className="form-check-label" htmlFor={category.id}>
        {category.name}
      </label>
    </div>
  );
};

FilterItem.propTypes = {
  category: PropTypes.object.isRequired,
  onCheckboxChange: PropTypes.func.isRequired
};

export default FilterItem;
