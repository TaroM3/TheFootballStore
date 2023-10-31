import { db } from "../../../firebaseConfig";
import useFirestore from "../../../hooks/useFirebase";
import TableProducts from "../../common/tableProducts/TableProducts";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
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
      {products.length > 0 ? <TableProducts products={products} /> : `Cargando`}
    </div>
  );
};

export default Dashboard;
