import React, { Component } from "react";
import { formatPrice } from "../../priceUtils";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.item.quantity
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onUpdateQuantity(
      event.target.quantity.id,
      event.target.quantity.value
    );
  };

  render() {
    const { item } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="CartItem">
            <img className="checkoutImage" src={item.image_url} alt="" />
            <span className="ml-2">{item.name}</span>
          </td>
          <td>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                name="quantity"
                id={item.id}
                className="box-qty"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </form>
          </td>
          <td>{formatPrice(item.price / 100)}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CartItem;
