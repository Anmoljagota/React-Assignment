import {
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  Wishlist_SUCCESS,
  ADDTOCART,
} from "./actionTypes";
const intial_state = {
  loading: false,
  error: false,
  products: [],
  wishlist: [],
  cartItems: [],
};
const reducer = (state = intial_state, { type, payload }) => {
  console.log(payload, "payload..");
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };
    case PRODUCT_SUCCESS:
      return { ...state, loading: false, products: payload };
    case PRODUCT_ERROR:
      return { ...state, loading: false, error: true };
    case Wishlist_SUCCESS:
      return { ...state, wishlist: [...payload] };
    case ADDTOCART:
      return {
        ...state,
        loading: false,
        error: false,
        cartItems: payload,
      };
    default:
      return state;
  }
};

export { reducer };
