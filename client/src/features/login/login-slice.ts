import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface loginState {
  user: null | string;
}

const initialState: loginState = {
  user: localStorage.getItem("user") || null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState(state, action: PayloadAction<string>) {
      state.user = action.payload
      localStorage.setItem("user", action.payload);
    },
  },
});

export const { setLoginState } = loginSlice.actions;
export default loginSlice.reducer;
