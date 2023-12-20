import { createContext } from 'react';
import cartReducer, { CART_ACTION, initialState } from '../reducer/cartReducer';
import { useReducer } from 'react';

export const CartContext = createContext(initialState);

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTION.ADD_TO_CART,
      payload: {
        product,
      },
    });
  };

  const removeById = (id) => {
    dispatch({
      type: CART_ACTION.DELETE_BY_ID,
      payload: {
        id,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTION.CLEAR_CART, payload: { products: [] } });
  };

  return { state, addToCart, removeById, clearCart };
}

function CartContextProvider({ children }) {
  const { state, addToCart, removeById, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        total: state.total,
        quantity: state.quantity,
        products: state.products,
        addToCart,
        removeById,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
