import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  // Condicional, si es admin entra a Outlet, sino entra a Navigate(home)

  return (
    <div>
      <Navigate to={"/"} />
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
