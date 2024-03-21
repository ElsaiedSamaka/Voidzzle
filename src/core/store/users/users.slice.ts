import { createSlice } from '@reduxjs/toolkit';
import { User } from 'core/models';
import {
  createUserThunk,
  deleteUserThunk,
  getUsersThunk,
  updateUserThunk,
} from './users.thunk';

interface UsersState {
  items: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  items: [],
  loading: false,
  error: null,
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getUsers
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        // getting todos from api action payload is the response of getTodos service
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createUser
    builder
      .addCase(createUserThunk.fulfilled, (state, action) => {
        // appending new user to the users array
        state.items.push(action.payload);
        // unshift new user to the users array
        // state.items.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // updateUser
    builder
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // deleteUser
    builder
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;
