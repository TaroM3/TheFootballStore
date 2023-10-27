import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";
import "animate.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  const limpiar = () => {
    Swal.fire({
      title: "Seguro que quieres eliminar los productos?",
      showDenyButton: true,
      color: "var(--secondary)",
      confirmButtonText: "Si",
      confirmButtonColor: "var(--main)",
      denyButtonText: `No`,
      denyButtonColor: "var(--main)",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Productos eliminados",
          color: "var(--secondary)",
          imageUrl:
            "https://res.cloudinary.com/daq80uhh9/image/upload/v1698382310/thefootballstore/football_bexspt.png",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          confirmButtonColor: "var(--main)",
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Genial!",
          color: "var(--secondary)",
          imageUrl:
            "https://res.cloudinary.com/daq80uhh9/image/upload/v1698382310/thefootballstore/football_bexspt.png",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          confirmButtonColor: "var(--main)",
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };

  return <Cart cart={cart} limpiar={limpiar} deleteById={deleteById} />;
};
export default CartContainer;
