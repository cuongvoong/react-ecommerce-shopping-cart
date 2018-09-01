import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItemsTable from "../components/cart/CartItemsTable";
import CartTotal from "../components/cart/CartTotal";
import { Link } from "react-router-dom";
import { getTotalAmount } from "../store/reducers";
import { updateItemQuantity } from "../store/actions/cartActions";

class Cart extends Component {
  render() {
    const { cart, totalAmount } = this.props;

    return (
      <div className="Cart">
        {cart.length === 0 ? (
          <div className="cart-empty">Cart is empty</div>
        ) : (
          <React.Fragment>
            <CartItemsTable
              onUpdateQuantity={this.handleUpdateQuantity}
              cartItems={cart}
            />
            <CartTotal total={parseFloat(totalAmount)} />
            <div className="checkout-btn">
              <Link className="btn btn-primary my-2 my-sm-0" to="/checkout">
                Checkout
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }

  handleUpdateQuantity = (id, value) => {
    if (value < 0 || !Number.isInteger(parseInt(value, 10))) {
      alert("Quantity must be a valid number and cannot be less than 0");
      return;
    }
    this.props.updateItemQuantity(id, value);
  };
}

const mapStateToProps = state => ({
  cart: state.cart.items,
  totalAmount: getTotalAmount(state)
});

export default connect(
  mapStateToProps,
  { updateItemQuantity }
)(Cart);
