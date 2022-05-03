import React from "react";
import { useLocation } from "react-router-dom";

const PageLocationState = () => {
  const location = useLocation();
  return (
    <div>
      <h3>Section with location state</h3>
      <p>Param passed with state: {location.state as string}</p>
      <p>Location object:</p>
      <pre>{JSON.stringify(location)}</pre>
    </div>
  );
};

export default PageLocationState;
