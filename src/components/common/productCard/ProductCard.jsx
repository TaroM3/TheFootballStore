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
          <Link to={`/itemDetail/${item.id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
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
  );
};

export default ProductCard;
