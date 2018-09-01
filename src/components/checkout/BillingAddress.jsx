import React, { Component } from "react";

class BillingAddress extends Component {
  state = {
    value: "Choose..."
  };

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://checkout.stripe.com/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="BillingAddress">
        <form>
          <div className="form-group">
            <label htmlFor="inputName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                onChange={() => this.handleChange}
              >
                <option>Choose...</option>
                <option value="California">California</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Order
          </button>
        </form>
      </div>
    );
  }
}

export default BillingAddress;
