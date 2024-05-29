import * as User from "./actionTypes";
const initalstate = {
  loading: false,
  error: false,
  data: [],
  message: "",
};
const reducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case User.USER_REGISTER_LOADING:
      return { ...state, loading: true };
    case User.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, message: payload };
    case User.USER_REGISTER_ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export { reducer };