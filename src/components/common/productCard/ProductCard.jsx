import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../productCard/ProductCard.module.css";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      className={styles.card}
      sx={{
        backgroundColor: "--primary",
        marginRight: "5px",
        boxShadow: "0",
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
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px 0px",
          backgroundColor: "black",
          color: "var(--primary)",
          height: "50px",
        }}
      >
        <section className={styles.titleCard}>
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
