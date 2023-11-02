import { Badge, Divider, Link } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SvgIcon } from "@mui/material";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  const [state, setState] = React.useState({
    right: false,
  });
  const { cart, clearCart, deleteById } = useContext(CartContext);
  const limpiar = () => {
    clearCart();
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 700,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      bgcolor={"black"}
      height={"100vh"}
    >
      <div className={styles.cart}>
        <div className={styles.titulo}>
          <h1>Lista de deseos</h1>
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
        </div>
        <Divider color="white" />
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className={styles.cartItem}>
              <div className={styles.cartInfo}>
                <h3>{elemento.title}</h3>
              </div>
              <img className={styles.img} src={elemento.imgUrl} alt="" />
              <button
                onClick={() => deleteById(elemento.id)}
                className={styles.btn}
              >
                <SvgIcon component={DeleteOutlineIcon} />
              </button>
            </div>
          );
        })}
        {cart.length > 0 && (
          <button onClick={limpiar} className={styles.btn2}>
            Limpiar carrito
          </button>
        )}

        {cart.length > 0 ? (
          <Link to="" className={styles.btn}>
            Iniciar Compra
          </Link>
        ) : (
          <div className={styles.cartVacio}>
            <h2>Agrega productos para hacer un pedido</h2>
            <Divider color="white" />
            <Link to={"/products"} className={styles.btn}>
              Ver productos
            </Link>
          </div>
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Link
            style={{ cursor: "pointer" }}
            onClick={toggleDrawer(anchor, true)}
          >
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

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartWidget;
