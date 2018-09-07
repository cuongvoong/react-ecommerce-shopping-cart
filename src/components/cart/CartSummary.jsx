import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatPrice } from "../../priceUtils";

const CartSummary = props => {
  return (
    <div className="CartSummary">
      <div className="order-summary">
        <span className="order-summary-title">
          SubTotal ({props.totalItems} items):{" "}
          <span className="order-summary-price">
            {formatPrice(props.totalAmount)}
          </span>
        </span>
        <div className="order-summary-checkout-button">
          <Link className="btn" to="/checkout">
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

CartSummary.propTypes = {
  totalItems: PropTypes.number,
  totalAmount: PropTypes.number
};

export default CartSummary;
