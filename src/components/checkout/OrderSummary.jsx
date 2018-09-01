import React from "react";
import "./OrderSummary.css";
import { formatPrice, calculateTax } from "../../priceUtils";

const OrderSummary = props => {
  const subTotal = parseFloat(props.totalAmount);
  const tax = calculateTax(subTotal);
  const total = subTotal + tax;

  return (
    <div className="OrderSummary">
      <div className="widget">
        <h4 className="widget-title">Order Summary</h4>
        <div className="summary-block">
          <div className="summary-content">
            <div className="summary-head">
              <h5 className="summary-title">{props.totalItems} item(s)</h5>
            </div>
            <div className="summary-price">
              <p className="summary-text">{formatPrice(subTotal)}</p>
            </div>
          </div>
        </div>
        <div className="summary-block">
          <div className="summary-content">
            <div className="summary-head">
              <h5 className="summary-title">Tax</h5>
            </div>
            <div className="summary-price">
              <p className="summary-text">{formatPrice(tax)}</p>
            </div>
          </div>
        </div>
        <div className="summary-block">
          <div className="summary-content">
            <div className="summary-head">
              {" "}
              <h5 className="summary-title">Total</h5>
            </div>
            <div className="summary-price">
              <p className="summary-text">{formatPrice(total)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
