import authSlice from "./features/authSlice";
import axios from "axios";
export const loginUser = async (user, dispatch, router) => {
  dispatch(authSlice.actions.loginStart());
  try {
    const res = await axios.post("https://dummyjson.com/auth/login", user);
    dispatch(authSlice.actions.loginSuccess(res.data));
    console.log(res.data)
    router.push("/");
  } catch (error) {
    dispatch(authSlice.actions.loginFalse());
  }
};

export const registerUser = async (user, dispatch, router) => {
  dispatch(authSlice.actions.registerStart());
  try {
    const res = await axios.post("https://dummyjson.com/users/add", user);
    dispatch(authSlice.actions.registerSuccess(res.data));
    router.push("/");
  } catch (error) {
    dispatch(authSlice.actions.registerFalse());
  }
};
