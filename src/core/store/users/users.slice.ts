import { createSlice } from "@reduxjs/toolkit";
import { Todo, User } from "core/models";
import {
  createTodoThunk,
  deleteTodoThunk,
  getTodosThunk,
  updateTodoThunk,
} from "./users.thunk";

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
  name: "users",
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
      .addCase(getTodosThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTodosThunk.fulfilled, (state, action) => {
        // getting todos from api action payload is the response of getTodos service
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createUser
    builder
      .addCase(createTodoThunk.fulfilled, (state, action) => {
        // appending new user to the users array
        state.items.push(action.payload);
        // unshift new user to the users array
        // state.items.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // updateUser
    builder
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(updateTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteUser
    builder
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;
