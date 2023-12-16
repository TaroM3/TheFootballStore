import ReactDOM from 'react-dom/client';
import './index.css';
// import "./misc.css";
import App from './App.jsx';
import CartContextProvider from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
