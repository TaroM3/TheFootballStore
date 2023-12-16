import { db } from '../../../firebaseConfig';
import useFirestore from '../../../hooks/useFirebase';
import { addDoc, collection } from 'firebase/firestore';
import Dashboard from './Dashboard';
import { products as mockUpProducts } from '../../products';
const DashboardContainer = () => {
  // console.log(mockUpProducts);
  const rellenar = () => {
    mockUpProducts.forEach((product) => {
      let refCollection = collection(db, 'products');
      addDoc(refCollection, product);
    });
  };

  const [products] = useFirestore({ databaseName: 'products' });

  return (
    <div>
      <button onClick={rellenar}>Rellenar base de datos</button>
      {products.length > 0 ? <Dashboard products={products} /> : `Cargando`}
    </div>
  );
};

export default DashboardContainer;
