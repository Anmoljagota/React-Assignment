import * as User from "./actionTypes";
const initalstate = {
  loading: false,
  error: false,
  data: [],
  message: "",
  userdetails: {},
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
    case User.GET_USERDETAILS_LOADING:
      return { ...state, loading: true };
    case User.GET_USERDETAILS_SUCCESS:
      return { ...state, userdetails: payload, loading: false };
    case User.GET_USERDETAILS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { reducer };
