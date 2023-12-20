// import { useState, useEffect } from 'react';
// import { db } from '../../../firebaseConfig';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
// import { getDocs, collection, query, where } from 'firebase/firestore';
import useFirestore from '../../../hooks/useFirebase';

const ItemListContainer = () => {
  // const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const { subCategoryName } = useParams();

  console.log(categoryName, subCategoryName);
  const [data] = useFirestore({
    databaseName: 'products',
    category: categoryName,
    subCategory: subCategoryName,
  });
  // useEffect(() => {
  //   let productsCollection = collection(db, "products");
  //   let consulta;
  //   if (subCategoryName) {
  //     consulta = query(
  //       productsCollection,
  //       where("subCategory", "==", subCategoryName)
  //     );
  //   } else if (categoryName) {
  //     consulta = query(
  //       productsCollection,
  //       where("category", "==", categoryName)
  //     );
  //   } else {
  //     consulta = productsCollection;
  //   }

  //   getDocs(consulta).then((res) => {
  //     let productos = res.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });

  //     setItems(productos);
  //   });
  // }, [categoryName, subCategoryName]);

  return (
    <ItemList
      items={data}
      categoryName={categoryName}
      subCategoryName={subCategoryName}
    />
  );
};

export default ItemListContainer;
