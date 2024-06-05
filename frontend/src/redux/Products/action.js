import * as products from "./actionTypes";
import axios from "axios";
const GetProduct = (limit, params) => async (dispatch) => {
  console.log(params, "params");

  try {
    dispatch({ type: products.PRODUCT_LOADING });
    const data = await axios.get(
      `http://localhost:8080/products`
      //params
    );
    // const data = await res.json();
    dispatch({ type: products.PRODUCT_SUCCESS, payload: data.data });
  } catch (err) {
    console.log(err, "err");
    dispatch({ type: products.PRODUCT_ERROR });
  }
};

const AddToCart = (productId) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8080/cart?productId=${productId}`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res, "...res..");
    dispatch({ type: products.ADDTOCART, payload: res.data });
  } catch (err) {
    console.log(err, "err");
  }
};

export { GetProduct, AddToCart };
