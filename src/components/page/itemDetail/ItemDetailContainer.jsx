import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFirestore from "../../../hooks/useFirebase";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Skeleton } from "@mui/material";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item] = useFirestore("products", id);
  const { addToCart } = useContext(CartContext);
  const talles = () => {
    Swal.fire({
      imageUrl:
        "https://res.cloudinary.com/daq80uhh9/image/upload/v1698767089/thefootballstore/Copia_de_Brochure_CMYK_1_omr8yw.jpg",
      imageWidth: "auto",
      imageHeight: "auto",
      heightAuto: false,
      imageAlt: "Custom image",
      showConfirmButton: false,
      background: "none",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const agregarAlCarrito = (size, selectOption) => {
    let data = {
      id: id,
      ...item,
      quantity: 1,
      size: size,
      selectOption: selectOption,
    };
    console.log(data);
    addToCart(data);
  };
  return (
    <>
      {" "}
      {item?.title !== undefined ? (
        <ItemDetail
          item={item}
          agregarAlCarrito={agregarAlCarrito}
          talles={talles}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "2rem 0rem",
            // gap: "2rem",
            justifyContent: "space-around",
          }}
        >
          <Skeleton variant="rectangular" width={500} height={500} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "350px",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: "32px" }} width={350} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ItemDetailContainer;
