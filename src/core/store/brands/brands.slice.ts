import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'core/models';
import {
  createBrandThunk,
  deleteBrandThunk,
  getBrandsThunk,
  deleteAllBrandsThunk,
  searchBrandsThunk,
  updateBrandThunk,
} from './brands.thunk';

interface BrandsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandsState = {
  items: [],
  loading: false,
  error: null,
};
export const brandsSlice = createSlice({
  name: 'brands',
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
    // getBrands
    builder
      .addCase(getBrandsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrandsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBrandsThunk.fulfilled, (state, action) => {
        // getting todos from api action payload is the response of getTodos service
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createBrand
    builder
      .addCase(createBrandThunk.fulfilled, (state, action) => {
        // appending new todo to the todos array
        // state.items.push(action.payload);
        // unshift new todo to the todos array
        state.items.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createBrandThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBrandThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // updateProduct
    builder
      .addCase(updateBrandThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(updateBrandThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBrandThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteBrand
    builder
      .addCase(deleteBrandThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteBrandThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBrandThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteAllBrands
    builder
      .addCase(deleteAllBrandsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [];
      })
      .addCase(deleteAllBrandsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAllBrandsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // searchBrands
    builder
      .addCase(searchBrandsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchBrandsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchBrandsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = brandsSlice.actions;
export default brandsSlice.reducer;
