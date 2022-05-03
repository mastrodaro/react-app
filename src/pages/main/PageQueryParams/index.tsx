import { useLocation, useSearchParams } from "react-router-dom";
import React from "react";

const PageQueryParams = () => {
  const [searchParams /*, setSearchParams*/] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      <h3>Section with query params</h3>
      <p>queryString: {searchParams.toString()}</p>
      <p>params:</p>
      <ul>
        {Array.from(searchParams).map(([key, value]) => (
          <li key={key}>
            {key}: {value} (type={typeof value})
          </li>
        ))}
      </ul>
      <p>Location object:</p>
      <pre>{JSON.stringify(location)}</pre>
    </div>
  );
};

export default PageQueryParams;
