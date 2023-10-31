import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./Info.module.css";
const Info = () => {
  return (
    <div className={styles.info}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          style={{ fontFamily: "frontpageneue" }}
          underline="hover"
          color="var(--main)"
          href="/"
        >
          Inicio
        </Link>
        <Typography
          style={{ fontFamily: "frontpageneue", textTransform: "capitalize" }}
          color="var(--main)"
        >
          Ayuda
        </Typography>
      </Breadcrumbs>
      <div>
        <h4>Ayuda</h4>
        <p></p>
      </div>
      <div>
        <h4>Cambios y devoluciones</h4>
        <p></p>
      </div>{" "}
      <div>
        <h4>Preguntas frecuentes</h4>
        <p></p>
      </div>
    </div>
  );
};

export default Info;
