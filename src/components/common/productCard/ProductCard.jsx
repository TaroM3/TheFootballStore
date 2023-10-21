import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../productCard/ProductCard.module.css";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      className={styles.card}
      sx={{
        backgroundColor: "--primary",
        margin: "10px 30px",
      }}
    >
      <Link to={`/itemDetail/${elemento.id}`}>
        <CardMedia
          className={styles.img}
          component="img"
          alt="camiseta"
          image={elemento.imgUrl}
        />
      </Link>
      <CardContent>
        <section
          className={styles.titleCard}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={`/itemDetail/${elemento.id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
          </Link>
        </section>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
