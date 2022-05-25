import { NavLink } from "react-router-dom";
import classes from "@/components/MainNavigation.module.scss";

const navigation = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Page with path params",
    to: "page-path-params",
  },
  {
    name: "Page with query params",
    to: "page-query-params",
    query: "?paramString=valueA&paramNumber=10&paramBoolean=true",
  },
  {
    name: "Page with location state",
    to: "page-location-state",
    state: "string value passed with state",
  },
  {
    name: "Page with programmatic navigation",
    to: "page-programmatic-navigation",
  },
  {
    name: "Page lazy loading",
    to: "page-lazy-load",
  },
  {
    name: "State Management",
    to: "state-management",
  },
];

const MainNavigation = () => {
  return (
    <ul>
      {navigation.map((link) => (
        <li key={link.to}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to={`${link.to}${link.query ?? ""}`}
            state={link.state}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MainNavigation;
