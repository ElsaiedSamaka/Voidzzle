import { createSlice } from "@reduxjs/toolkit";
import { Product } from "core/models";
import {
  createProductThunk,
  deleteProductThunk,
  getProductsThunk,
  updateProductThunk,
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
      .addCase(getProductsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        // getting todos from api action payload is the response of getTodos service
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createProduct
    builder
      .addCase(createProductThunk.fulfilled, (state, action) => {
        console.log("[1;32m", action.payload);
        // appending new todo to the todos array
        state.products.push(action.payload);
        // unshift new todo to the todos array
        // state.todos.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProductThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // updateProduct
    builder
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        });
      })
      .addCase(updateProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProductThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteProduct
    builder
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.filter(
          (todo) => todo.id !== action.payload
        );
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = todosSlice.actions;
export default todosSlice.reducer;
