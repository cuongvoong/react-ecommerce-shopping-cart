import React, { Component } from "react";
import { connect } from "react-redux";
import BillingAddress from "../components/checkout/BillingAddress";
import OrderSummary from "../components/checkout/OrderSummary";
import { getTotalAmount } from "../store/reducers";

class Checkout extends Component {
  render() {
    const { cart, totalAmount } = this.props;

    return (
      <div className="Checkout">
        {cart.length === 0 ? (
          <div className="cart-empty">Cart is empty</div>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <BillingAddress />
            </div>
            <div className="col-md-6">
              <OrderSummary
                totalItems={cart.totalItems}
                totalAmount={totalAmount}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  totalAmount: getTotalAmount(state)
});

export default connect(
  mapStateToProps,
  {}
)(Checkout);
