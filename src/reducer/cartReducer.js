export const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};

export const CART_ACTION = {
  CART: 'CART',
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  DELETE_BY_ID: 'DELETE_BY_ID',
  UPDATE_QUATITY_BY_ID: 'UPDATE_QUATITY_BY_ID',
  UPDATE_CART: 'UPDATE_CART',
  GET_PARTIAL_PRICE: 'GET_PARTIAL_PRICE',
};

const updateCart = (updatedArray) => {
  const newQuantity = updatedArray.reduce((quantity, product) => {
    return quantity + product.quantity;
  }, 0);
  const newTotal = updatedArray.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  console.log(newQuantity, newTotal);
  return { newQuantity, newTotal };
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION.ADD_TO_CART]: (state, action) => {
    // const updatedProducts = state.products.filter((product) => product.id !== action.payload.product.id)
    if (
      state.products.some((product) => product.id === action.payload.product.id)
    ) {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload.product.id
      );
      updatedProducts.push(action.payload.product);
      const { newQuantity, newTotal } = updateCart(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
        total: newTotal,
        quantity: newQuantity,
      };
    }

    const updatedProducts = [...state.products, action.payload.product];

    const { newTotal, newQuantity } = updateCart(updatedProducts);
    return {
      ...state,
      products: updatedProducts,
      total: newTotal,
      quantity: newQuantity,
    };
  },
  [CART_ACTION.DELETE_BY_ID]: (state, action) => {
    const updatedCart = state.products.filter(
      (product) => product.id !== action.payload.id
    );
    return {
      ...state,
      products: updatedCart,
    };
  },
};

function cartReducer(state, action) {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
  // const { type, payload } = action;
  // let quantity;
  // let total;
  // switch (type) {
  //   case [ACTION_TYPES.ADD_TO_CART]:
  //     quantity = state.products.reduce((quantity, product) => {
  //       quantity + product.quantity;
  //     }, 0);
  //     total = state.products.reduce((total, product) => {
  //       total + product.price;
  //     }, 0);
  //     return {
  //       ...state,
  //       products: payload.products,
  //       total: total,
  //       quantity: quantity,
  //     };
  //   case [ACTION_TYPES.DELETE_BY_ID]:
  //     return { ...state, products: payload.products };
  //   case [ACTION_TYPES.UPDATE_CART]:
  //     return { ...state, total: payload.total, quantity: payload.quantity };
  //   default:
  //     throw new Error(`No case for type ${type} found in cartReducer`);
  // }
}

export default cartReducer;
