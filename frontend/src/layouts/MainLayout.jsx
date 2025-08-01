import { Outlet } from "react-router-dom";
import BurgerNav from "../components/BurgerNav";

const MainLayout = () => {

  return (
    <div className="w-full h-screen box-border">
        <div className="w-full h-full">
          <BurgerNav />
          <Outlet />
        </div>
    </div>
  );
};

export default MainLayout;
