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
  return { newQuantity, newTotal };
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION.ADD_TO_CART]: (state, action) => {
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
    const { newTotal, newQuantity } = updateCart(updatedCart);
    return {
      ...state,
      products: updatedCart,
      total: newTotal,
      quantity: newQuantity,
    };
  },
};

function cartReducer(state, action) {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
}

export default cartReducer;
