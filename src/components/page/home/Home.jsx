import styles from "../home/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
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
    </div>
  );
};

export default Home;
