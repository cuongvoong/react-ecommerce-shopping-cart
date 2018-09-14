import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";

class BillingDetails extends Component {
  state = {
    validationError: ""
  };
  handleSubmit = event => {
    const url = "http://34.216.251.100:5000/charge";
    const { fullName } = event.target;
    event.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken({ name: fullName.value }).then(payload => {
        if (payload.error) {
          this.setState({ validationError: payload.error.message });
        } else {
          console.log("[token]", payload);
          console.log(payload.token.id);
          axios({
            method: "post",
            url: url,
            data: {
              name: fullName.value,
              source: payload.token.id,
              amount: this.props.total
            }
          })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  toggleFullNameFocus = focus => {
    if (focus) {
      this.setState({
        focusFullName: true
      });
    } else {
      this.setState({
        focusFullName: false
      });
    }
  };

  fullNameClasses = () => {
    return "fullName" + (this.state.focusFullName ? " fullName--focus" : "");
  };

  render() {
    const elementStyles = {
      base: {
        fontSize: "18px",
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    };

    return (
      <div className="BillingAddress">
        <form onSubmit={this.handleSubmit}>
          <label>
            Full name
            <div className={this.fullNameClasses()}>
              <input
                onFocus={() => this.toggleFullNameFocus(true)}
                onBlur={() => this.toggleFullNameFocus(false)}
                name="fullName"
                placeholder="Name on card"
              />
            </div>
          </label>

          <label>
            Card number
            <CardNumberElement style={elementStyles} />
          </label>
          <label>
            Expiration date
            <CardExpiryElement style={elementStyles} />
          </label>
          <label>
            CVC
            <CardCVCElement style={elementStyles} />
          </label>
          <label>
            Postal code
            <PostalCodeElement style={elementStyles} />
          </label>
          <div className="validation-errors">
            {this.state.validationError || ""}
          </div>
          <div className="billing-details-place-order">
            <button className="billing-details-place-order-btn">
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}

BillingDetails.propTypes = {
  total: PropTypes.number.isRequired
};

export default injectStripe(BillingDetails);
