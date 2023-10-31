import { Breadcrumbs, Link, Skeleton, Typography } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import styles from "../itemList/ItemList.module.css";
const ItemList = ({ items, categoryName, subCategoryName }) => {
  let arr = [1, 2, 3, 4];
  return (
    <div className={styles.itemList}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          style={{ fontFamily: "frontpageneue" }}
          underline="hover"
          color="var(--main)"
          href="/"
        >
          Inicio
        </Link>
        <Link
          style={{ fontFamily: "frontpageneue" }}
          underline="hover"
          color="var(--main)"
          href="/products"
        >
          Productos
        </Link>
        <Typography
          style={{ fontFamily: "frontpageneue", textTransform: "capitalize" }}
          color="var(--main)"
        >
          {categoryName}
        </Typography>
      </Breadcrumbs>
      <div>
        <h1>
          {categoryName} {subCategoryName}
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
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
    </div>
  );
};

export default ItemList;
