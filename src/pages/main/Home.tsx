import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <p>Home content</p>
      <p>
        <Link to="non-existing">This link points to non existing page</Link>
      </p>
    </div>
  );
};

export default Home;
