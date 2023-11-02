import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Image } from "react-bootstrap";
import SizeButton from "../../common/sizeButton/SizeButton";
import styles from "./ItemDetail.module.css";
import { ToastContainer } from "react-toastify";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, agregarAlCarrito, talles }) => {
  const [sizeOption, setSizeOption] = useState("");
  const [selectOption, setSelectOption] = useState("No");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickSelect = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log(event.target.attributes.value?.nodeValue);
    event.target.attributes.value?.nodeValue
      ? setSelectOption(event.target.attributes.value.nodeValue)
      : null;
    setAnchorEl(null);
  };
  return (
    <div>
      <Breadcrumbs style={{ marginLeft: "100px" }} aria-label="breadcrumb">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M6.125 13.125H23.625C23.8571 13.125 24.0796 13.2172 24.2437 13.3813C24.4078 13.5454 24.5 13.7679 24.5 14C24.5 14.2321 24.4078 14.4546 24.2437 14.6187C24.0796 14.7828 23.8571 14.875 23.625 14.875H6.125C5.89294 14.875 5.67038 14.7828 5.50628 14.6187C5.34219 14.4546 5.25 14.2321 5.25 14C5.25 13.7679 5.34219 13.5454 5.50628 13.3813C5.67038 13.2172 5.89294 13.125 6.125 13.125Z"
              fill="white"
            />
            <path
              d="M6.48686 14.0001L13.7441 21.2556C13.9084 21.4199 14.0007 21.6428 14.0007 21.8751C14.0007 22.1075 13.9084 22.3303 13.7441 22.4946C13.5798 22.6589 13.357 22.7512 13.1246 22.7512C12.8923 22.7512 12.6694 22.6589 12.5051 22.4946L4.63011 14.6196C4.54863 14.5383 4.48398 14.4418 4.43986 14.3355C4.39575 14.2292 4.37305 14.1152 4.37305 14.0001C4.37305 13.885 4.39575 13.7711 4.43986 13.6648C4.48398 13.5585 4.54863 13.4619 4.63011 13.3806L12.5051 5.50563C12.6694 5.34133 12.8923 5.24902 13.1246 5.24902C13.357 5.24902 13.5798 5.34133 13.7441 5.50563C13.9084 5.66993 14.0007 5.89277 14.0007 6.12513C14.0007 6.35749 13.9084 6.58033 13.7441 6.74463L6.48686 14.0001Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link
          style={{ fontFamily: "frontpageneue" }}
          underline="hover"
          color="var(--main)"
          href="/"
        >
          Inicio
        </Link>
        <Link
          style={{ fontFamily: "frontpageneue" }}
          underline="hover"
          color="var(--main)"
          href="/products"
        >
          Productos
        </Link>
        <Typography
          style={{ fontFamily: "frontpageneue", textTransform: "capitalize" }}
          color="var(--main)"
        ></Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "2rem 0rem",
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
            gap: "17px",
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
              onClick={talles}
              variant="body2"
              sx={{
                fontSize: "22px",
                fontFamily: "frontpageneue",
                cursor: "pointer",
              }}
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
          <Button
            id="basic-button"
            variant="outlined"
            sx={{
              width: "70px",
              height: "50px",
              textAlign: "center",
              fontFamily: "frontpageneue",
              fontSize: "15px",
              border: "1px solid white",
              color: "white",
              flexDirection: "row",
              justifyContent: "center",
              textTransform: "capitalize",
              ":hover": {
                border: "1px solid var(--main)",
                color: "var(--main)",
              },
            }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickSelect}
          >
            {selectOption}
            <ExpandMoreIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              value="No"
              onClick={handleClose}
              sx={{
                backgroundColor: "black",
                color: "white",
                fontFamily: "frontpageneue",
                ":hover": { color: "var(--main)" },
              }}
              color="black"
            >
              No
            </MenuItem>
            <MenuItem
              value="Si"
              onClick={handleClose}
              sx={{
                backgroundColor: "black",
                color: "white",
                fontFamily: "frontpageneue",
                ":hover": { color: "var(--main)" },
              }}
            >
              Si
            </MenuItem>
          </Menu>
          <Typography
            variant="body2"
            sx={{ fontSize: "19px", fontFamily: "frontpageneue" }}
          >
            Cantidad
          </Typography>
          <CounterContainer quantity={1} />
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
          <ToastContainer className={styles.toast} />
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
