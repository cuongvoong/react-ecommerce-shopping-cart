import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to CuongEATS</h1>
        <p className="lead">
          To begin the ordering process, click the button below.
        </p>
        <div className="order-button">
          <Link to="/products" className="btn btn-success btn-large">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
