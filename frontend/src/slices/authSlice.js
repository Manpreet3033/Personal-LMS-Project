import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  signUpData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSignupData(state,action){
      state.signUpData = action.payload
    }
  },
});

export const { setUser, setToken, setLoading, setSignupData } = authSlice.actions;

export default authSlice.reducer;
