import { Badge } from "@mui/material";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6df0f7",
    },
    secondary: {
      main: "#6df0f7",
    },
  },
});
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <ThemeProvider theme={theme}>
      <Link to="/cart">
        <Badge badgeContent={total} color="secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 4.61804L18.4432 12.1373L18.5554 12.4828H18.9187H26.8249L20.4286 17.1299L20.1347 17.3435L20.247 17.689L22.6902 25.2082L16.2939 20.5611L16 20.3475L15.7061 20.5611L9.30985 25.2082L11.753 17.689L11.8653 17.3435L11.5714 17.1299L5.17511 12.4828H13.0813H13.4446L13.5568 12.1373L16 4.61804Z"
              stroke="#6DF0F7"
            />
          </svg>
        </Badge>
      </Link>
    </ThemeProvider>
  );
};

export default CartWidget;
