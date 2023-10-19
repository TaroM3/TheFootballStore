import ProductCard from "../../common/productCard/ProductCard";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <section className={styles.productContainer}>
      {items.length !== 0
        ? items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })
        : `Cargando. . . `}
    </section>
  );
};

export default ItemList;
