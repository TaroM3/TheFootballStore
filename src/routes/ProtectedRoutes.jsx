// import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
// import { UserContext } from '../context/UserContext';

const ProtectedRoutes = () => {
  const { isAdmin } = useUser();

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
