import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../priceUtils";

class ProductItem extends Component {
  state = {
    isAdded: false
  };

  constructor() {
    super();
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <div className="card-img-top">
          <img src={item.image_url} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <div className="footer">
            <div>
              <span className="product-price">{formatPrice(item.price)}</span>
            </div>
            <div className="addToCart">
              <button className={this.buttonClass()} onClick={this.handleClick}>
                {!this.state.isAdded ? <i className="fas fa-cart-plus" /> : ""}
                {!this.state.isAdded ? " ADD" : "✔ ADDED"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.setState({ isAdded: true }, () => {
      this.timer = setTimeout(() => {
        this.setState({
          isAdded: false
        });
      }, 3000);
    });

    this.props.onAddToCart(this.props.item);
  };

  buttonClass() {
    return "btn " + (!this.state.isAdded ? "btn-primary" : "btn-info");
  }
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descriptin: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductItem;
