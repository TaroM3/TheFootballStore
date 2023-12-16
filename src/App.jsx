import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
// import CartContext from './context/CartContext';
import UserContext from './context/UserContext';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
