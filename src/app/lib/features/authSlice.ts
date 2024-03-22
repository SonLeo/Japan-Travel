import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Định nghĩa kiểu dữ liệu cho state
interface AuthState {
  login: {
    currentUser: { username: string ,image :string} | null;
    isFetching: boolean;
    error: boolean;
  };
  register: {
    isFetching: boolean;
    error: boolean;
    success: boolean;
  };
}

// Khởi tạo state ban đầu
const initialState: AuthState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  register: {
    isFetching: false,
    error: false,
    success: false,
  },
};

// Tạo slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<{ username: string,image:string }>) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    
    loginFalse: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.success = true;
      state.register.error = false;
    },
    registerFalse: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
  },
});

// Export các action và reducer
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export const authSelector = authSlice.selectSlice;



export default authSlice;
