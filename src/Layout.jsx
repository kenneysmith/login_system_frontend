import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
