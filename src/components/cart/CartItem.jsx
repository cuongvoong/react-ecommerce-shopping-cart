import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../priceUtils";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.quantity.toString()
    };
  }

  componentDidMount() {
    this.updateFormInput(this.props.quantity);
  }

  updateFormInput(quantity) {
    if (quantity < 10) {
      this.setState({ currentForm: "select" });
    } else {
      this.setState({ currentForm: "input" });
    }
  }

  handleSelectChange = event => {
    const { id, value } = event.target;
    const intValue = parseInt(value, 10);
    if (intValue < 10) {
      this.setState({ value });
      this.props.onUpdateQuantity(id, intValue);
    } else {
      this.setState({ currentForm: "input" });
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const intValue = parseInt(event.target.quantity.value, 10);
    this.props.onUpdateQuantity(event.target.quantity.id, intValue);

    this.updateFormInput(event.target.quantity.value);
  };

  handleDeleteItem = event => {
    this.props.onDeleteItem(event.target.id);
  };

  render() {
    const { item, quantity } = this.props;

    const selectForm = (
      <select
        id={item.id}
        name="quantity"
        value={this.state.value}
        onChange={this.handleSelectChange.bind(this)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option className="tenPlus" value="10+">
          10+
        </option>
      </select>
    );

    const inputForm = (
      <React.Fragment>
        <input
          type="text"
          name="quantity"
          id={item.id}
          className="box-qty"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        {quantity.toString() !== this.state.value ? (
          <button>Update</button>
        ) : (
          ""
        )}
      </React.Fragment>
    );

    const currentForm =
      this.state.currentForm === "select" ? selectForm : inputForm;

    return (
      <div className="cart-item">
        <div className="cart-image">
          <img src={item.image_url} alt="" />
        </div>
        <div className="cart-item-description">
          <span className="cart-item-title">{item.name}</span>
          <div className="cart-item-delete">
            <button
              className="cart-item-delete-text btn btn-danger"
              id={item.id}
              onClick={this.handleDeleteItem.bind(this)}
            >
              <i className="fas fa-trash-alt" /> Delete
            </button>
          </div>
        </div>
        <div className="cart-item-price">{formatPrice(item.price)}</div>
        <div className="cart-item-quantity">
          <form onSubmit={this.handleSubmit.bind(this)}>{currentForm}</form>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default CartItem;
