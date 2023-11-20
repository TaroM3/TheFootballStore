import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = () => {
  // Condicional, si es admin entra a Outlet, sino entra a Navigate(home)
  const { getRole } = useContext(UserContext);

  let role = getRole();

  return <div>{role === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
