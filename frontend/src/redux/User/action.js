import * as User from "./actionTypes";

const RegiterUser = (details) => async (dispatch) => {
  try {
    dispatch({ type: User.USER_REGISTER_LOADING });
    const res = await fetch("http://localhost:8018/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    });
    dispatch({ type: User.USER_REGISTER_SUCCESS, payload: res });
    console.log(res, "res");
  } catch (err) {
    dispatch({ type: User.USER_REGISTER_ERROR });
    console.log(err);
  }
};

export { RegiterUser };
