import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardContainer from "../components/page/dashboard/DashboardContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      {/* Rutas-privadas */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>

      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
