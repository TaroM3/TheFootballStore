import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFirestore from "../../../hooks/useFirebase";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Skeleton } from "@mui/material";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item] = useFirestore("products", id);
  const { addToCart } = useContext(CartContext);

  const agregarAlCarrito = (size) => {
    let data = {
      ...item,
      quantity: 1,
      size: size,
    };
    addToCart(data);
  };
  return (
    <>
      {item?.title !== undefined ? (
        <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />
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
