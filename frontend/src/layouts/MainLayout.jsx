import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="w-full h-screen box-border">
        <div className="w-full h-full">
            <Outlet />
        </div>
    </div>
  );
};

export default MainLayout;
