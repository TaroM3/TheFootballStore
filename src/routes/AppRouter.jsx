import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import DashboardContainer from "../components/page/dashboard/DashboardContainer";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route path={path} key={id} element={<Element />} />
        ))}
      </Route>

      {/* Rutas-privadas */}
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashboardContainer />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
