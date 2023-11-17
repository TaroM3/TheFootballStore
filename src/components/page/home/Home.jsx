import styles from "../home/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Whatsapp from "../../common/whatsappIcon/Whatsapp";

const Home = ({ el }) => {
  let arr = [1, 2, 3, 4];
  return (
    <div className={styles.home}>
      <Whatsapp />
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859086/Banner_Ilustraci%C3%B3n_e90apk.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859086/Banner_Packging_fbsdjk.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698686154/thefootballstore/Banner_Entrega_iuxjiq.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859085/Banner_Camiseta_atzxi4.jpg" />
        </div>
      </Carousel>
      <div className={styles.margen}>
        {/* <section
          style={{
            textAlign: "center",
            fontSize: "var(--text-xs)",
            padding: "var(--space-md)",
          }}
        >
          En <b>The Football Store</b>, trabajamos bajo la modalidad de encargo,
          importando productos desde el extranjero hacia Argentina. El tiempo de
          entrega estimado es de alrededor de <b>30 días hábiles</b>, aunque
          puede variar debido a factores externos. Nos esforzamos por minimizar
          cualquier demora y te mantendremos informado(a) sobre el estado de tu
          pedido.
        </section> */}
        <section style={{ marginTop: "50px" }}>
          <h2>Productos destacados</h2>
          <div className={styles.destacados}>
            {el.length > 0
              ? el.map((elemento) => {
                  return (
                    <div key={elemento.id}>
                      <Link to={`/itemDetail/${elemento.id}`}>
                        <img src={elemento.imgUrl} alt={elemento.title} />
                      </Link>
                    </div>
                  );
                })
              : arr.map((e) => {
                  return (
                    <div key={e}>
                      <Skeleton
                        variant="rectangular"
                        width={300}
                        height={300}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1.3rem" }}
                        width={100}
                      />
                    </div>
                  );
                })}
          </div>
        </section>
        <section className={styles.sections}>
          <div>
            <Link to="/category/premier-league">
              {" "}
              <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367546/thefootballstore/ezgif-5-6ce96d7cdb_gvwfl7.gif" />
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/category/selecciones">
              <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367545/thefootballstore/ezgif-5-6dc4e18f21_pe33dd.gif" />
            </Link>
            <Link to="/category/liga-argentina">
              <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367545/thefootballstore/ezgif-5-e5b37d74b4_joatin.gif" />
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/category/serie-a">
              <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367546/thefootballstore/ezgif-5-5a9fe775da_kbfdxj.gif" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
