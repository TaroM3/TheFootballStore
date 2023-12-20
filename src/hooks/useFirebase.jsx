import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
//entra por parametro el nombre de la base de datos y devuelve un array de objetos
const useFirestore = ({
  databaseName,
  id = undefined,
  limitValue = 12,
  prevDoc = undefined,
  nextDoc = undefined,
  category = undefined,
  subCategory = undefined,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = collection(db, databaseName);

    if (category !== undefined || subCategory !== undefined) {
      if (subCategory !== undefined) {
        const queryDb = query(
          collection(db, databaseName),
          orderBy('sold', 'desc'),
          limit(limitValue),
          where('subCategory', '==', subCategory)
        );
        getDocs(queryDb).then((res) => {
          const arrayData = res.docs.map((data) => {
            return { ...data.data(), id: data.id };
          });
          setData(arrayData);
        });
      } else {
        const queryDb = query(
          collection(db, databaseName),
          orderBy('sold', 'desc'),
          limit(limitValue),
          where('category', '==', category)
        );
        getDocs(queryDb).then((res) => {
          const arrayData = res.docs.map((data) => {
            return { ...data.data(), id: data.id };
          });
          setData(arrayData);
        });
      }

      // pagination;
    } else {
      const queryDb = query(
        collection(db, databaseName),
        orderBy('sold', 'desc'),
        limit(limitValue)
      );
      if (id !== undefined) {
        const getRef = doc(getData, id);
        getDoc(getRef).then((res) => {
          setData(res.data(), res.id);
        });
      } else {
        getDocs(queryDb).then((res) => {
          let arrayData = res.docs.map((data) => {
            return { ...data.data(), id: data.id };
          });
          setData(arrayData);
        });
      }
    }
  }, [databaseName, id, limitValue, prevDoc, nextDoc, category, subCategory]);
  return [data];
};

export default useFirestore;
