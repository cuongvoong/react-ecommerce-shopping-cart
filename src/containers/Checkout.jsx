import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BillingDetails from "../components/checkout/BillingDetails";
import OrderSummary from "../components/checkout/OrderSummary";
import { getTotalAmount } from "../store/reducers";
import { calculateTax } from "../../src/priceUtils";
import "./Checkout.css";

class Checkout extends Component {
  render() {
    const { cart, totalAmount } = this.props;
    const subTotal = totalAmount;
    const tax = calculateTax(subTotal);
    const total = subTotal + tax;

    return (
      <div className="Checkout">
        {cart.addedItemIds.length === 0 ? (
          <div className="cart-empty">Cart is empty</div>
        ) : (
          <React.Fragment>
            <OrderSummary
              {...this.state}
              totalItems={cart.totalItems}
              subTotal={subTotal}
              tax={tax}
              total={total}
            />
            <BillingDetails
              onFullName={this.handleFullName}
              onCreditCard={this.handleCreditCard}
              onExpMonth={this.handleExpMonth}
              onExpYear={this.handleExpYear}
              onZipCode={this.handleZipCode}
              total={total}
            />
          </React.Fragment>
        )}
      </div>
    );
  }

  handleFullName = fullName => {
    this.setState({ fullName });
  };

  handleCreditCard = creditCard => {
    this.setState({ creditCard });
  };

  handleExpMonth = expMonth => {
    this.setState({ expMonth });
  };

  handleExpYear = expYear => {
    this.setState({ expYear });
  };

  handleZipCode = zipCode => {
    this.setState({ zipCode });
  };
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
