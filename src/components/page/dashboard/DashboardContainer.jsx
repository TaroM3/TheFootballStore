import { db } from "../../../firebaseConfig";
import useFirestore from "../../../hooks/useFirebase";
import { addDoc, collection } from "firebase/firestore";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };

  const [products] = useFirestore("products");

  return (
    <div>
      <button onClick={rellenar}>Rellenar base de datos</button>
      {products.length > 0 ? <Dashboard products={products} /> : `Cargando`}
    </div>
  );
};

export default DashboardContainer;
