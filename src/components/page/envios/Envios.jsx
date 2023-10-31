import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./Envios.module.css";

const Envios = () => {
  return (
    <div className={styles.envios}>
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
          Envios
        </Typography>
      </Breadcrumbs>
      <div>
        <h4>Metodos de entrega</h4>
        <p>Buenos Aires $2000 </p>
        <p> Fuera de Buenos Aires $3000</p>
      </div>
      <div>
        <h4>Modalidad de trabajo</h4>
        <p>
          En The Football Store, trabajamos bajo la{" "}
          <span style={{ color: "var(--accent)" }}> modalidad de encargo</span>,
          importando productos desde el exterior hacia Argentina.{" "}
        </p>
        <p>
          El tiempo de entrega estimado es de{" "}
          <span style={{ color: "var(--accent)" }}>30 días hábiles</span>,
          aunque pueda variar por factores externos.
        </p>
        <p>
          Nos esforzamos por minimizar cualquier demora y te mantendremos con la
          información de el estado de tu pedido.
        </p>
        <p>
          Agradecemos tu comprensión y estamos aquí para brindarte un servicio
          de calidad.
        </p>{" "}
      </div>
    </div>
  );
};

export default Envios;
