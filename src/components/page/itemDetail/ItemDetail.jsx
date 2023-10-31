import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Image } from "react-bootstrap";
import SizeButton from "../../common/sizeButton/SizeButton";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  const [sizeOption, setSizeOption] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectOption(event.target.value);
  };

  // console.log(selectRef.current.value);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "2rem 0rem",
        // gap: "2rem",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          height: "600px",
        }}
      >
        <Box>
          {item.imgUrl.map((image) => {
            return (
              <Image
                width={150}
                key={image}
                src={image}
                className={styles.images}
              />
            );
          })}
        </Box>
        <Image
          width={600}
          src={`${item.imgUrl[0]}`}
          className={styles.images}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "400px",
          gap: "10px",
        }}
      >
        <Typography
          style={{ fontFamily: "Bebas Neue" }}
          variant="h1"
          component="div"
          sx={{
            fontSize: "32px",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "25px",
            fontFamily: "bebas neue",
            color: "var(--main)",
          }}
        >
          $25.000
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "25px", fontFamily: "frontpageneue" }}
        >
          Ver medios de pago
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ backgroundColor: "var(--accent)" }}
        />
        <Typography
          variant="body1"
          sx={{ fontSize: "25px", fontFamily: "frontpageneue" }}
        >
          Seleccionar Talle
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {item.size.map((size) => {
            return (
              <SizeButton
                key={size}
                size={size}
                setSizeOption={setSizeOption}
              />
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "22px",
              fontFamily: "frontpageneue",
              color: "var(--main)",
            }}
          >
            Talle {sizeOption}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "22px", fontFamily: "frontpageneue" }}
          >
            Guía de talles
          </Typography>
        </Box>
        {/* </Box> */}
        <Typography
          variant="body2"
          sx={{ fontSize: "19px", fontFamily: "frontpageneue" }}
        >
          Personalizada(Dorsal y/o Parches)
        </Typography>
        <Select
          labelId="select-label"
          onChange={handleChange}
          defaultValue="no"
          variant="outlined"
          className={styles.select}
          sx={{
            border: " 1px solid white",
            width: "100px",
            color: "white",
            appearance: "",
            backgroundColor: "black",
            background: "no repeat right white",
            padding: "5px 12px",
            fontFamily: "frontpageneue",
          }}
          select
          menuProps={{ color: "white" }}
          IconComponent={ExpandMoreIcon}
        >
          {/* <select style={}> */}
          {/* <option>Hola</option>
          <option>Hola</option>
          <option>Hola</option> */}
          <MenuItem
            value="no"
            sx={{ backgroundColor: "black", color: "white" }}
            color="black"
          >
            No
          </MenuItem>
          <MenuItem
            value="si"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Si
          </MenuItem>
        </Select>
        <Typography
          variant="body2"
          sx={{ fontSize: "19px", fontFamily: "frontpageneue" }}
        >
          Cantidad
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: "400px",
            backgroundColor: "var(--main)",
            textTransform: "uppercase",
            fontFamily: "Bebas Neue",
            color: "white",
            fontSize: "17px",
            padding: "12px",
            borderColor: "white",
            ":hover": {
              backgroundColor: "black",
              borderColor: "gray",
              color: "gray",
            },
          }}
          onClick={() => agregarAlCarrito(sizeOption, selectOption)}
        >
          Agregar a tu lista de deseos
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetail;
