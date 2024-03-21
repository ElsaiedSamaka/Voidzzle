import { createAsyncThunk } from '@reduxjs/toolkit';
import productsService from 'core/services/products.service';

export const getProductsThunk = createAsyncThunk(
  'products/get',
  async (_, thunkAPI) => {
    try {
      const response = await productsService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteProductThunk = createAsyncThunk(
  'products/delete',
  async (id: string, thunkAPI) => {
    try {
      // ideally the resualt of delete request should be deleted product id of the deleted product
      // but since this is a dummy project, we are just returning the id
      const response = await productsService.remove(id);
      return thunkAPI.fulfillWithValue(response);
      // return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteAllProductsThunk = createAsyncThunk(
  'products/deleteAll',
  async (ids: [], thunkAPI) => {
    try {
      const response = await productsService.removeAll(ids);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const updateProductThunk = createAsyncThunk(
  'products/update',
  async (body: object, thunkAPI) => {
    try {
      const response = await productsService.put(body.id, body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createProductThunk = createAsyncThunk(
  'products/post',
  async (body: object, thunkAPI) => {
    try {
      const response = await productsService.post(body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const searchProductsThunk = createAsyncThunk(
  'products/search',
  async (query: string, thunkAPI) => {
    try {
      const response = await productsService.search(query);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
