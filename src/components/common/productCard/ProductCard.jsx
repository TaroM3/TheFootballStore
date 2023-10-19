import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../productCard/ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card className={styles.card}>
        <Link to={`/itemDetail/${item.id}`}>
          <CardMedia
            className={styles.img}
            component="img"
            alt=""
            height="300"
            image={item.img}
          />
        </Link>
        <CardContent>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to={`/itemDetail/${item.id}`} className={styles.titleCard}>
              <Typography component="div">{item.title}</Typography>
            </Link>
            <CardActions>
              <Link to={`/itemDetail/${item.id}`}>
                <Button className={styles.btn} size="small">
                  Ver Detalle
                </Button>
              </Link>
            </CardActions>
          </section>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
      <section className={styles.card}>
        <header className={styles.img}>
          <img src={`${item.url}`} alt={`${item.description}`} />
        </header>
        <h2>{`${item.title}`}</h2>
      </section>
    </>
  );
};

export default ProductCard;
