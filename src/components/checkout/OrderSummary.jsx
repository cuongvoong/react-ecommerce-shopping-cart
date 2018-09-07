import React from "react";
import PropTypes from "prop-types";
import { formatPrice, calculateTax } from "../../priceUtils";

const OrderSummary = props => {
  const subTotal = parseFloat(props.totalAmount);
  const tax = calculateTax(subTotal);
  const total = subTotal + tax;

  return (
    <div className="OrderSummary">
      <button className="order-summary-place-order">Place your order</button>
      <h3>Order Summary</h3>
      <table className="order-summary-table">
        <tbody>
          <tr>
            <td>Items ({props.totalItems})</td>
            <td className="order-summary-text-right">
              {formatPrice(subTotal)}
            </td>
          </tr>
          <tr>
            <td>Tax: </td>
            <td className="order-summary-text-right">{formatPrice(tax)}</td>
          </tr>
          <tr className="order-summary-total">
            <td>Order Total: </td>
            <td className="order-summary-text-right">{formatPrice(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

OrderSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired
};

export default OrderSummary;
