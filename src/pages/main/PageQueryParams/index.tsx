import { useSearchParams } from "react-router-dom";

const PageQueryParams = () => {
  const [urlSearchParams] = useSearchParams();
  return (
    <div>
      <h3>Section with query params</h3>
      <p>queryString: {urlSearchParams.toString()}</p>
      <p>params:</p>
      <ul>
        {Array.from(urlSearchParams).map(([key, value]) => (
          <li key={key}>
            {key}: {value} (type={typeof value})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageQueryParams;

//TODO 404, nav programitically
