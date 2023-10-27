import styles from "../home/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

const Home = ({ el }) => {
  let arr = [1, 2, 3, 4];
  return (
    <div className={styles.home}>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859086/Banner_Ilustraci%C3%B3n_e90apk.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859085/Banner_Camiseta_atzxi4.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697859086/Banner_Packging_fbsdjk.jpg" />
        </div>
      </Carousel>
      <section
        style={{
          textAlign: "center",
          fontSize: "var(--text-xs)",
          padding: "var(--space-sm)",
        }}
      >
        Breve descripción de la marca? forma de trabajo? Lorem ipsum dolor sit
        amet consectetur. Massa purus commodo faucibus id diam amet ultricies
        risus. Adipiscing aliquam maecenas duis aliquet nibh vel libero. Quis
        magna pellentesque in quam velit rhoncus non nec. Volutpat ultricies
        ornare blandit dictum pretium lorem. Venenatis auctor
      </section>
      <section>
        <h3>Productos destacados</h3>
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
                    <Skeleton variant="rectangular" width={300} height={300} />
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
          <Link to="/category/liga-argentina">
            <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367545/thefootballstore/ezgif-5-e5b37d74b4_joatin.gif" />
          </Link>
          <Link to="/category/selecciones">
            <img src="https://res.cloudinary.com/daq80uhh9/image/upload/v1698367545/thefootballstore/ezgif-5-6dc4e18f21_pe33dd.gif" />
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
  );
};

export default Home;
