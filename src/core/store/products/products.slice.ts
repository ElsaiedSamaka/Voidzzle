import { createSlice } from "@reduxjs/toolkit";
import { Product, Todo } from "core/models";
import {
  createTodoThunk,
  deleteTodoThunk,
  getTodosThunk,
  updateTodoThunk,
} from "./products.thunk";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};
export const todosSlice = createSlice({
  name: "todos",
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
    // getProducts
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
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createProduct
    builder
      .addCase(createTodoThunk.fulfilled, (state, action) => {
        console.log("[1;32m", action.payload);
        // appending new todo to the todos array
        state.products.push(action.payload);
        // unshift new todo to the todos array
        // state.todos.unshift(action.payload);
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
    // updateProduct
    builder
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
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
    // deleteProduct
    builder
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.filter(
          (todo) => todo.id !== action.payload
        );
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

export const { setLoading, setError } = todosSlice.actions;
export default todosSlice.reducer;
