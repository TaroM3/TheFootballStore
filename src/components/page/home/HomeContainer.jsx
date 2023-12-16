import Home from './Home';
// import { useState, useEffect } from 'react';
// import { db } from "../../../firebaseConfig";
// import { useParams } from 'react-router-dom';
// import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import useFirestore from '../../../hooks/useFirebase';

const HomeContainer = () => {
  // const [el, setEl] = useState([]);
  // const { soldQuantity } = useParams();

  const [data] = useFirestore({ databaseName: 'products', limitValue: 4 });
  // useEffect(() => {
  //   let elCollection = collection(db, "products");
  //   let consulta = query(elCollection, orderBy("sold", "desc"), limit(4));
  //   getDocs(consulta).then((res) => {
  //     let productos = res.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });

  //     setEl(productos);
  //   });
  // }, [soldQuantity]);

  return <Home data={data} />;
};

export default HomeContainer;
