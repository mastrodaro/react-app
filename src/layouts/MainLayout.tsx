import { Outlet } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";

const MainLayout = () => {
  return (
    <main>
      <h1>Main Layout</h1>
      <MainNavigation />
      <Outlet />
    </main>
  );
};

export default MainLayout;
