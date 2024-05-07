import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR } from "./actionTypes";
import axios from "axios";
const GetProduct = (limit, params) => async (dispatch) => {
  console.log(params, "params");
  try {
    dispatch({ type: PRODUCT_LOADING });
    const data = await axios.get(
      `http://localhost:8018/products`,
      params
    );
    // const data = await res.json();
    dispatch({ type: PRODUCT_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

export { GetProduct };
