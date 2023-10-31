import { Breadcrumbs, Link, SvgIcon, Typography } from "@mui/material";
import styles from "./Contacto.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contacto = () => {
  return (
    <div className={styles.contacto}>
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
          Contacto
        </Typography>
      </Breadcrumbs>
      <section className={styles.contactoDivs}>
        <div>
          <h4>Contacto</h4>
          <p>
            Contactanos blablabal ? Lorem ipsum dolor sit amet consectetur.
            Massa purus commodo faucibus id diam amet ultricies risus.{" "}
          </p>
          <p>+54 9 221 669-7039</p>
          <Link to={"/info"}>
            <SvgIcon component={InstagramIcon} />
          </Link>
        </div>
        <div>
          <h5>¡Mandanos un mensaje!</h5>
        </div>{" "}
      </section>
    </div>
  );
};

export default Contacto;
