import { createSlice } from '@reduxjs/toolkit';

import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  deleteAllCategoriesThunk,
  searchCategoriesThunk,
  updateCategoryThunk,
} from './categories.thunk';

interface CategoriesState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
};
export const categoriesSlice = createSlice({
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
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type
        state.error = action.error.message as any;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        // getting products from api action payload is the response of getTodos service
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createProduct
    builder
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        // appending new todo to the todos array
        // state.items.push(action.payload);
        // unshift new todo to the todos array
        state.items.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type
        state.error = action.error.message as any;
      })
      .addCase(createCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // updateProduct
    builder
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(updateCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type
        state.error = action.error.message as any;
      })
      .addCase(updateCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // deleteProduct
    builder
      .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type
        state.error = action.error.message as any;
      })
      .addCase(deleteCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // deleteAllProducts
    builder
      .addCase(deleteAllCategoriesThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.items = [];
      })
      .addCase(deleteAllCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type
        state.error = action.error.message as any;
      })
      .addCase(deleteAllCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
    // searchProducts
    builder
      .addCase(searchCategoriesThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        // TODO: fix type

        state.error = action.error.message as any;
      })
      .addCase(searchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
