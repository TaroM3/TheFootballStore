import { Badge, Divider, Link } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styles from "./CartWidget.module.css";
import CounterContainer from "../counter/CounterContainer";
import CloseButton from "../closeButton/CloseButton";
import CartProductCard from "../cartProductCard/CartProductCard";

const CartWidget = () => {
  const { getTotalQuantity, getNames, updateQuantityById } =
    useContext(CartContext);
  let total = getTotalQuantity();
  let nombresCart = getNames();

  // const [counter, setCounter] = useState(1);
  const [state, setState] = React.useState({
    right: false,
  });
  const { cart } = useContext(CartContext);

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
      bgcolor={"black"}
    >
      <Box
        onClick={toggleDrawer("right", false)}
        sx={{
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      ></Box>
      <div className={styles.cart}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.titulo}>
            <h1>Lista de deseos</h1>
            <Badge badgeContent={total} color="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 4.61804L18.4432 12.1373L18.5554 12.4828H18.9187H26.8249L20.4286 17.1299L20.1347 17.3435L20.247 17.689L22.6902 25.2082L16.2939 20.5611L16 20.3475L15.7061 20.5611L9.30985 25.2082L11.753 17.689L11.8653 17.3435L11.5714 17.1299L5.17511 12.4828H13.0813H13.4446L13.5568 12.1373L16 4.61804Z"
                  stroke="#6DF0F7"
                />
              </svg>
            </Badge>{" "}
          </div>{" "}
          <CloseButton />
        </div>
        <Divider color="white" style={{ margin: "20px 0px " }} />
        <h2>Productos</h2>
        <Divider color="white" style={{ margin: "20px 0px " }} />
        {cart.map((elemento, i) => {
          return (
            <div key={{ i }}>
              {" "}
              <CartProductCard product={elemento} key={i} />{" "}
              <Divider color="white" style={{ margin: "20px 0px " }} />
            </div>
          );
        })}

        {cart.length > 0 ? (
          <a
            target="blank"
            href={`https://api.whatsapp.com/send?phone=5492216697039&text=Hola, estoy interesado/a en: ${nombresCart} muchas gracias.`}
            className={styles.btn}
          >
            Iniciar Compra
          </a>
        ) : (
          <div className={styles.cartVacio}>
            <a
              href={"/products"}
              className={styles.btn}
              onClick={toggleDrawer(anchor, false)}
            >
              Ver productos
            </a>
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
            <Badge badgeContent={total} color="primary">
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
