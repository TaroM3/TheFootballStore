import Home from './Home';

import useFirestore from '../../../hooks/useFirebase';

const HomeContainer = () => {
  const [data] = useFirestore({
    databaseName: 'products',
    order: 'sold',
    limitValue: 4,
  });

  return <Home data={data} />;
};

export default HomeContainer;
