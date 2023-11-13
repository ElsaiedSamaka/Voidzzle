import { createSlice } from "@reduxjs/toolkit";
import { User } from "core/models";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  changePasswordThunk,
} from "./user.thunk";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
    passwordConfirmation: "",
  },
};
export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder
      .addCase(registerThunk.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        // getting user from api action payload is the response of register service
        state.user = action.payload;
      });
    // login
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.user = null;
      });
    // logout
    builder.addCase(logoutThunk.fulfilled,(state, action)=>{
        state.user = action.payload;
    }).addCase(logoutThunk.rejected, (state, action) => {
        state.user = null;
      });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
