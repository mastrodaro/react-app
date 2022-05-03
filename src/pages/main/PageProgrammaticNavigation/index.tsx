import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const PageProgrammaticNavigation = () => {
  const navigate = useNavigate();

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    navigate(event.target.value);
  };

  return (
    <div>
      <h3>Programmatic navigation</h3>
      <p>
        Navigate to:{" "}
        <select onChange={selectHandler}>
          <option value="">Select</option>
          <option value="/">Home</option>
          <option value="/page-path-params">Page with path params</option>
          <option value="/page-lazy-load">Page lazy loading</option>
        </select>
      </p>
    </div>
  );
};

export default PageProgrammaticNavigation;
