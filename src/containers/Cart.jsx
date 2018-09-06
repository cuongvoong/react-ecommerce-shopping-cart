import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import { getTotalAmount } from "../store/reducers";
import { updateItemQuantity, deleteItem } from "../store/actions/cartActions";

class Cart extends Component {
  render() {
    const { cart, products, totalAmount } = this.props;

    return (
      <div className="Cart">
        {cart.addedItemIds.length === 0 ? (
          <div className="cart-empty">Cart is empty</div>
        ) : (
          <React.Fragment>
            <CartItems
              onUpdateQuantity={this.handleUpdateQuantity}
              onDeleteItem={this.handleDeleteItem}
              cart={cart}
              products={products.items}
            />
            <CartSummary
              total={parseFloat(totalAmount)}
              totalItems={cart.totalItems}
            />
          </React.Fragment>
        )}
      </div>
    );
  }

  handleUpdateQuantity = (id, value) => {
    if (value < 0 || !Number.isInteger(parseInt(value, 10))) {
      alert("Quantity must be a valid number and cannot be less than 0");
      return;
    }
    this.props.updateItemQuantity(id, value);
  };

  handleDeleteItem = id => {
    console.log(id);
    this.props.deleteItem(id);
  };
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products,
  totalAmount: getTotalAmount(state)
});

export default connect(
  mapStateToProps,
  { updateItemQuantity, deleteItem }
)(Cart);
