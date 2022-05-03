import { Link, Outlet } from "react-router-dom";

const items = [
  {
    name: "Item A",
    to: "itema",
  },
  {
    name: "Item B",
    to: "itemb",
  },
];

const PagePathParams = () => {
  return (
    <div>
      <h3>Section with path params</h3>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default PagePathParams;
