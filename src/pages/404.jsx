import React from "react";
import { Link } from "react-router-dom";

const _404 = () => {
  return (
    <div className="error">
      <div className="cont">
        <h3>Oops! There seems to be an error.</h3>
        <Link to="/" style={{ marginTop: 30, textDecoration: "underline" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default _404;
