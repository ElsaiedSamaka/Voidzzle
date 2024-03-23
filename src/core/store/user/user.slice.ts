import { createSlice } from '@reduxjs/toolkit';
import { User } from 'core/models';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  // TODO: add implementation 👇
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePasswordThunk,
} from './user.thunk';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  tokens: {
    accessTokens: string;
    refreshToken: string;
  } | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  tokens: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error =
          action.error.message || 'An error occurred during registration.';
        state.tokens = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        // getting user from api action payload which is the response of register service
        const { user, tokens } = action.payload;
        state.loading = false;
        state.user = user;
        state.error = null;
        state.tokens = {
          accessTokens: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        };
      });
    // login
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.loading = false;
        state.user = user;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message || 'An error occurred during login.';
      });
    // logout
    builder
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.user = null;
      });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
