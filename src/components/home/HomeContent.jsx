import React from "react";
import "./Home.css";

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to CuongEATS</h1>
        <p className="lead">
          To begin the ordering process, click the button below.
        </p>
        <a href="/products" className="btn btn-success">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
