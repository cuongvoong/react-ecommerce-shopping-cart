import React from "react";
import CartItem from "./CartItem";

const CartItemsTable = props => {
  const { cartItems } = props;
  const items = cartItems.map(item => {
    return (
      <CartItem
        onUpdateQuantity={props.onUpdateQuantity}
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <div className="CartItemsTable">
      <table className="centered">
        <thead className="">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default CartItemsTable;
