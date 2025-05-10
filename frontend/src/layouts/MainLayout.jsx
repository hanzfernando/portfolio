import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="w-full h-screen box-border">
      {/* Content area centered */}
      
        <Outlet />
    </div>
  );
};

export default MainLayout;
