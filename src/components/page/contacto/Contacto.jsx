import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./Contacto.module.css";
import Whatsapp from "../../common/whatsappIcon/Whatsapp";
const Contacto = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.contacto}>
      <Whatsapp />
      <Breadcrumbs aria-label="breadcrumb">
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
        <Typography
          style={{ fontFamily: "frontpageneue", textTransform: "capitalize" }}
          color="var(--main)"
        >
          Contacto
        </Typography>
      </Breadcrumbs>
      <section className={styles.contactoDivs}>
        <div>
          <h4>Contacto</h4>
          <p>
            Para realizar tus consultas, podés contactarnos por Instagram,
            Whatsapp, o completá el siguiente formulario:
          </p>
          <a
            target="blank"
            className={styles.link}
            href={"https://www.instagram.com/thefootballstore.ar/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M8.58266 2H16.9536C20.1425 2 22.7335 4.6 22.7335 7.8V16.2C22.7335 17.7383 22.1246 19.2135 21.0406 20.3012C19.9567 21.3889 18.4865 22 16.9536 22H8.58266C5.39374 22 2.80273 19.4 2.80273 16.2V7.8C2.80273 6.26174 3.41169 4.78649 4.49564 3.69878C5.57958 2.61107 7.04973 2 8.58266 2ZM8.38336 4C7.43188 4 6.51938 4.37928 5.84658 5.05442C5.17379 5.72955 4.79581 6.64522 4.79581 7.6V16.4C4.79581 18.39 6.40024 20 8.38336 20H17.1529C18.1044 20 19.0169 19.6207 19.6897 18.9456C20.3625 18.2705 20.7404 17.3548 20.7404 16.4V7.6C20.7404 5.61 19.136 4 17.1529 4H8.38336ZM18 5.5C18.3303 5.5 18.6472 5.6317 18.8808 5.86612C19.1144 6.10054 19.2456 6.41848 19.2456 6.75C19.2456 7.08152 19.1144 7.39946 18.8808 7.63388C18.6472 7.8683 18.3303 8 18 8C17.6696 8 17.3527 7.8683 17.1191 7.63388C16.8855 7.39946 16.7543 7.08152 16.7543 6.75C16.7543 6.41848 16.8855 6.10054 17.1191 5.86612C17.3527 5.6317 17.6696 5.5 18 5.5ZM12.7681 7C14.0896 7 15.357 7.52678 16.2914 8.46447C17.2259 9.40215 17.7508 10.6739 17.7508 12C17.7508 13.3261 17.2259 14.5979 16.2914 15.5355C15.357 16.4732 14.0896 17 12.7681 17C11.4466 17 10.1793 16.4732 9.24483 15.5355C8.31039 14.5979 7.78543 13.3261 7.78543 12C7.78543 10.6739 8.31039 9.40215 9.24483 8.46447C10.1793 7.52678 11.4466 7 12.7681 7ZM12.7681 9C11.9752 9 11.2148 9.31607 10.6542 9.87868C10.0935 10.4413 9.77851 11.2044 9.77851 12C9.77851 12.7956 10.0935 13.5587 10.6542 14.1213C11.2148 14.6839 11.9752 15 12.7681 15C13.561 15 14.3214 14.6839 14.8821 14.1213C15.4428 13.5587 15.7577 12.7956 15.7577 12C15.7577 11.2044 15.4428 10.4413 14.8821 9.87868C14.3214 9.31607 13.561 9 12.7681 9Z"
                fill="white"
              />
            </svg>
            <p> @thefootballstore.ar</p>
          </a>
        </div>
        <div className={styles.form}>
          <h5>¡Mandanos un mensaje!</h5>
          <form id="contactForm" onSubmit={handleSubmit}>
            {" "}
            <input
              required
              className={styles.input}
              type="text"
              placeholder="Nombre y Apellido"
              name="name"
              onChange={handleChange}
              minLength="3"
            />
            <input
              required
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              required
              className={styles.input}
              type="tel"
              placeholder="Telefono"
              name="phone"
              onChange={handleChange}
              minLength="6"
              maxLength="16"
            />
            <textarea
              onChange={handleChange}
              className={styles.mensaje}
              name="message"
              // cols="50"
              // rows="20"
              placeholder="mensaje"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>{" "}
      </section>
    </div>
  );
};

export default Contacto;
