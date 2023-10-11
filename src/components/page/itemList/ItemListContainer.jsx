import useFirestore from "../../../hooks/useFirebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items] = useFirestore(import.meta.env.VITE_PRODUCTS_DB);

  return <ItemList items={items} />;
};

export default ItemListContainer;
