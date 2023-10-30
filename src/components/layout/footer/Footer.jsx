import { SvgIcon } from "@mui/material";
import styles from "../footer/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h3> The Football Store </h3>
        <p>Dejanos tu mail para recibir novedades</p>
        <Link to={"/info"}>Terminos y condiciones</Link>
      </div>
      <ul className={styles.ul}>
        <li>
          <Link to={"/products"}>Productos</Link>
        </li>
        <li>
          <Link to={"/info"}>Cuidados</Link>
        </li>
        <li>
          <Link to={"/info"}>Guia de talles</Link>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <Link to={"/info"}>Envios</Link>
        </li>
        <li>
          <Link to={"/info"}>Metodos de entrega</Link>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <Link to={"/info"}>Ayuda</Link>
        </li>
        <li>
          <Link to={"/info"}>FAQs</Link>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <Link to={"/info"}>Contacto</Link>
        </li>
        <li>
          <Link to={"/info"}>+54 9 221 669-7039</Link>
        </li>
        <li>
          <Link to={"/info"}>
            <SvgIcon component={InstagramIcon} />
          </Link>
          <Link to={"/info"}>
            <SvgIcon component={FacebookIcon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
