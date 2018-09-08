import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to CuongEATS</h1>
        <p className="lead">
          To begin the ordering process, click the button below.
        </p>
        <Link to="/products" className="btn btn-success">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
