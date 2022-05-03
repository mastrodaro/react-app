import { useParams } from "react-router-dom";

const PathParamsDetails = () => {
  const { id } = useParams();
  return <div>The details for: {id}</div>;
};

export default PathParamsDetails;
