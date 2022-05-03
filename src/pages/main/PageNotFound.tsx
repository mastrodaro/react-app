import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h3>Page not found</h3>
      <p>
        Go back to{" "}
        <Link to="/" replace>
          home page
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
