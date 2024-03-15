import { createAsyncThunk } from '@reduxjs/toolkit';
import brandsService from 'core/services/brands.service';

export const getBrandsThunk = createAsyncThunk(
  'brands/get',
  async (_, thunkAPI) => {
    try {
      const response = await brandsService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteBrandThunk = createAsyncThunk(
  'brands/delete',
  async (id: any, thunkAPI) => {
    try {
      // ideally the resualt of delete request should be deleted product id of the deleted product
      // but since this is a dummy project, we are just returning the id
      const response = await brandsService.remove(id);
      // return thunkAPI.fulfillWithValue(response);
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteAllBrandsThunk = createAsyncThunk(
  'brands/deleteAll',
  async (ids: any[], thunkAPI) => {
    try {
      const response = await brandsService.removeAll(ids);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const updateBrandThunk = createAsyncThunk(
  'brands/update',
  async (body: any, thunkAPI) => {
    try {
      const response = await brandsService.put(body.id, body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createBrandThunk = createAsyncThunk(
  'brands/post',
  async (body: any, thunkAPI) => {
    try {
      const response = await brandsService.post(body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const searchBrandsThunk = createAsyncThunk(
  'brands/search',
  async (query: string, thunkAPI) => {
    try {
      const response = await brandsService.search(query);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
