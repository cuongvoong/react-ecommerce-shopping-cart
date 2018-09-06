import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../priceUtils";

const CartTotal = props => {
  return (
    <div className="CartSummary">
      <div className="order-summary">
        <span className="order-summary-title">
          SubTotal ({props.totalItems} items):{" "}
          <span className="order-summary-price">
            {formatPrice(props.total)}
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

export default CartTotal;
