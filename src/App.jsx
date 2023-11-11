import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContext from "./context/CartContext";
import UserContext from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <CartContext>
          <AppRouter />
        </CartContext>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
