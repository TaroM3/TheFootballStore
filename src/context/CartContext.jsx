// import { createContext, useState } from "react";

// export const CartContext = createContext();
// const CartContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   //limpia el carrito
//   const clearCart = () => {
//     setCart([]);
//   };

//   //agrega producto al carrito
//   const addToCart = (productToAdd) => {
//     let exist = cart.some((product) => product.id === productToAdd.id);
//     if (exist === true) {
//       let newCart = cart.map((product) => {
//         if (product.id === productToAdd.id) {
//           return { ...product, quantity: productToAdd.quantity };
//         } else {
//           return product;
//         }
//       });
//       setCart([...newCart]);
//     } else {
//       setCart([...cart, productToAdd]);
//     }
//   };

//   //actualiza la cantidad del producto que contenga el id pasado por parametro
//   const updateQuantityById = (id, quantity) => {
//     let newCart = cart.map((product) => {
//       if (product.id === +id) {
//         product.quantity = quantity;
//       }
//       return product;
//     });
//     setCart([...newCart]);
//   };

//   //   retorna precio total del carrito
//   const getTotalPrice = () => {
//     let total = cart.reduce((acc, product) => {
//       return acc + product.price * product.quantity;
//     }, 0);
//     return total;
//   };

//   //borra el producto que contenga el id pasado por parametro
//   const deleteById = (id) => {
//     let newCart = cart.filter((product) => product.id !== id);
//     setCart(newCart);
//   };

//   //retorna el total de cantidad de productos del carrito
//   const getTotalQuantity = () => {
//     let total = cart.reduce((acc, product) => {
//       return acc + product.quantity;
//     }, 0);
//     return total;
//   };

//   const getNames = () => {
//     let total = cart.reduce((acc, product) => {
//       return `${acc + product.title}, `;
//     }, "");
//     return total;
//   };

//   //retorna la cantidad del producto que contenga el id pasado por parametro
//   const getQuantityById = (id) => {
//     let productById = cart.find((product) => product.id === +id);
//     return productById?.quantity;
//   };

//   //retorna el precio parcial de un solo producto que contenga el id pasado por parametro
//   const getPartialPrice = (id) => {
//     let productById = cart.find((product) => product.id === id);
//     return productById.quantity * productById.price;
//   };

//   let data = {
//     cart,
//     clearCart,
//     getTotalPrice,
//     addToCart,
//     deleteById,
//     getNames,
//     getTotalQuantity,
//     getQuantityById,
//     getPartialPrice,
//     updateQuantityById,
//   };
//   return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
// };

// export default CartContextProvider;

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
  const { state, addToCart, removeById } = useCartReducer();

  // const value = {
  //   total: state.total,
  //   totalQuantity: state.quantity,
  //   products: state.products,
  //   addToCart,
  //   removeById,
  // };

  return (
    <CartContext.Provider
      value={{
        total: state.total,
        quantity: state.quantity,
        products: state.products,
        addToCart,
        removeById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
