import React from "react";
import { formatPrice } from "../../priceUtils";

const CartTotal = props => {
  return (
    <div className="CartTotal">
      <h3>Total: {formatPrice(props.total)}</h3>
    </div>
  );
};

export default CartTotal;
