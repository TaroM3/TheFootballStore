import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { Image } from "react-bootstrap";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  const [sizeOption, setSizeOption] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSizeOption(event.target.value);
  };

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
      <Image width={500} className="" src={`${item.imgUrl[0]}`} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "350px",
        }}
      >
        <Typography
          style={{ fontFamily: "Roboto" }}
          variant="h1"
          component="div"
          sx={{
            fontSize: "32px",
          }}
        >
          {item.title}
        </Typography>

        {/* <Box width={350}> */}
        <Typography variant="body1" sx={{ fontSize: "25px" }}>
          Seleccionar Talle
        </Typography>
        <Select
          select
          labelId="select-label"
          // value={sizeOption}
          onChange={handleChange}
          sx={{ width: "350px" }}
          name="size"
          options={item.size}
        >
          {item.size.map((size) => {
            return (
              <MenuItem key={size} name={size} value={size}>
                {size}
              </MenuItem>
            );
          })}
        </Select>
        <Typography variant="body2" sx={{ fontSize: "22px" }}>
          Guía de talles
        </Typography>
        {/* </Box> */}
        <Typography variant="body2" sx={{ fontSize: "22px" }}>
          Personalizada
        </Typography>
        <Select
          labelId="select-label"
          // value={sizeOption}
          // onChange={handleChange}
          defaultValue="nombre"
          sx={{ width: "350px" }}
        >
          <MenuItem value="nombre">Nombre</MenuItem>
        </Select>
        <Button
          sx={{
            width: "350px",
            color: "black",
            textTransform: "none",
            fontSize: "22px",
          }}
          onClick={() => agregarAlCarrito(sizeOption)}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetail;
