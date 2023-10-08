import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContext from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <AppRouter />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
