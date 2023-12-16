import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
//entra por parametro el nombre de la base de datos y devuelve un array de objetos
const useFirestore = ({ databaseName, id = undefined, limitValue = 12 }) => {
  // const {databaseName, limitValue, id } = props
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = collection(db, databaseName);
    const first = query(
      collection(db, 'products'),
      orderBy('sold', 'desc'),
      limit(limitValue)
    );
    if (id !== undefined) {
      const getRef = doc(getData, id);
      getDoc(getRef).then((res) => {
        setData(res.data(), res.id);
      });
    } else {
      getDocs(first).then((res) => {
        let arrayData = res.docs.map((data) => {
          return { ...data.data(), id: data.id };
        });
        setData(arrayData);
      });
    }
  }, [databaseName, id, limitValue]);
  return [data];
};

export default useFirestore;
