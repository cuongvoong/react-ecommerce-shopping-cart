import React from "react";
import PropTypes from "prop-types";
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

CartItems.propTypes = {
  cart: PropTypes.shape({
    addedItemIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    quantityById: PropTypes.objectOf(PropTypes.number).isRequired,
    totalItems: PropTypes.number.isRequired
  }),
  products: PropTypes.objectOf(PropTypes.object).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default CartItems;
