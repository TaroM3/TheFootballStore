import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
