import { Badge } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
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
          <StarOutlineIcon style={{ color: "#6df0f7", fontSize: "2rem" }} />
        </Badge>
      </Link>
    </ThemeProvider>
  );
};

export default CartWidget;
