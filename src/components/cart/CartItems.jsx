import React from "react";
import CartItem from "./CartItem";

const CartItems = props => {
  const { cart, products } = props;
  const items = cart.addedItemIds.map(item => {
    return (
      <CartItem
        onUpdateQuantity={props.onUpdateQuantity}
        onDeleteItem={props.onDeleteItem}
        key={item}
        item={products[item]}
        quantity={cart.quantityById[item]}
      />
    );
  });

  return <div className="CartItems">{items}</div>;
};

export default CartItems;
