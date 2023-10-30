import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavbarContainer from "./navbar/NavbarContainer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--secondary)",
        color: "var(--primary)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavbarContainer />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
