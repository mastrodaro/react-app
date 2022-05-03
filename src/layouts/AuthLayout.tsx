import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      <h1>Auth Layout</h1>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
