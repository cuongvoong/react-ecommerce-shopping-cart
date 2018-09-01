import React, { Component } from "react";

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
      <div className="ProductItem">
        <div className="card">
          <img className="card-img-top" src={item.image_url} alt="" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text product-price">{"$" + item.price / 100}</p>
            <div className="addtocart">
              <button className={this.buttonClass()} onClick={this.handleClick}>
                {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
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

export default ProductItem;
