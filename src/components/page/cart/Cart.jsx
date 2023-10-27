import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SvgIcon } from "@mui/material";
const Cart = ({ cart, limpiar, deleteById }) => {
  return (
    <div className={styles.cart}>
      <h1>Hacer pedido</h1>
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
        <Link to="" className={styles.btn2}>
          Hacer pedido
        </Link>
      ) : (
        <div className={styles.cartVacio}>
          <h2>Agrega productos para hacer un pedido</h2>
          <Link to="/products" className={styles.btn}>
            Ver productos
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
