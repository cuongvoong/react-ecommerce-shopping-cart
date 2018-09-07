import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BillingAddress from "../components/checkout/BillingAddress";
import OrderSummary from "../components/checkout/OrderSummary";
import { getTotalAmount } from "../store/reducers";
import "./Checkout.css";

class Checkout extends Component {
  render() {
    const { cart, totalAmount } = this.props;

    return (
      <div className="Checkout">
        {cart.addedItemIds.length === 0 ? (
          <div className="cart-empty">Cart is empty</div>
        ) : (
          <React.Fragment>
            <BillingAddress />
            <OrderSummary
              totalItems={cart.totalItems}
              totalAmount={totalAmount}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    addedItemIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    quantityById: PropTypes.objectOf(PropTypes.number).isRequired,
    totalItems: PropTypes.number.isRequired
  }),
  totalAmount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart,
  totalAmount: getTotalAmount(state)
});

export default connect(
  mapStateToProps,
  {}
)(Checkout);
