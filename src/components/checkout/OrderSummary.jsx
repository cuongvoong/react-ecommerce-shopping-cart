import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../priceUtils";

const OrderSummary = props => {
  const { subTotal, tax, total } = props;

  return (
    <div className="OrderSummary">
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
  subTotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default OrderSummary;
