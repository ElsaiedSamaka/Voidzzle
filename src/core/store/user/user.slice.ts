import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  username: string;
  email: string;
}

const initialState: UserState = {
  id: "1",
  username: "saied",
  email: "saied.samaka1997@gmail.com",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    updateUserusername: (state, action) => {
      state.username = action.payload;
    },
    updateUseremail: (state, action) => {
      state.email = action.payload;
    },
    deleteUser: (state, action) => {
      state = initialState;
      return state;
    },
    updateUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUser, updateUserusername, updateUseremail } = userSlice.actions;
export default userSlice.reducer;
