import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'core/models';
import {
  createProductThunk,
  deleteAllProductsThunk,
  deleteProductThunk,
  getProductsThunk,
  searchProductsThunk,
  updateProductThunk,
} from './products.thunk';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};
export const productsSlice = createSlice({
  name: 'products',
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
        const { products } = action.payload;
        // getting products from api action payload is the response of getTodos service
        state.items = products;
        state.loading = false;
        state.error = null;
      });
    // createProduct
    builder
      .addCase(createProductThunk.fulfilled, (state, action) => {
        // appending new todo to the todos array
        // state.items.push(action.payload);
        // unshift new todo to the todos array
        state.items.unshift(action.payload);
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
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
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
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteAllProducts
    builder
      .addCase(deleteAllProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [];
      })
      .addCase(deleteAllProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAllProductsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // searchProducts
    builder
      .addCase(searchProductsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchProductsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
